/* =========================================================================
   CHÁCARA LAGO JB — interações
   Funciona nas duas páginas (site base e cardápio). Cada parte só roda
   se os elementos existirem na página atual.
   ========================================================================= */

/* ---- Ano automático no rodapé ---- */
const elAno = document.getElementById("ano");
if (elAno) elAno.textContent = new Date().getFullYear();

/* ---- VÍDEO DA CAPA: garante que toca no celular (autoplay mobile é chato) ---- */
const heroVideo = document.getElementById("heroVideo");
if (heroVideo) {
  heroVideo.muted = true; // mudo é obrigatório pro autoplay no celular
  const p = heroVideo.play();
  if (p && p.catch) {
    // se o navegador bloquear o autoplay, esconde o vídeo e fica a imagem bonita (sem botão de play)
    p.catch(() => { heroVideo.style.display = "none"; });
  }
}

/* ---- ANIMAÇÃO AO ROLAR: elementos surgem suaves quando entram na tela ---- */
document.documentElement.classList.add("js");
const alvosReveal = document.querySelectorAll(
  ".section-head, .feature, .card, .gallery-item, .partner-box, .attractions-box, .form, .photo-band .pb-text, .cta-row"
);
alvosReveal.forEach((el) => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  alvosReveal.forEach((el) => obs.observe(el));
} else {
  alvosReveal.forEach((el) => el.classList.add("visible"));
}

/* ---- CARDÁPIO: monta os itens a partir do menu.js ---- */
function montarMenu(lista) {
  return lista
    .map(
      (grupo) => `
      <div class="menu-cat">
        <h2 class="menu-cat-title">${grupo.categoria}</h2>
        ${grupo.nota ? `<p class="menu-cat-nota">${grupo.nota}</p>` : ""}
        ${grupo.itens
          .map(
            (it) => `
          <div class="menu-item">
            ${
              it.img
                ? `<img class="mi-thumb" src="${it.img}" alt="${it.nome}" loading="lazy" />`
                : `<div class="mi-thumb mi-thumb-ph">${grupo.icone || "🍽️"}</div>`
            }
            <div class="mi-left">
              <div class="mi-name">${it.nome}${it.destaque ? '<span class="mi-tag">⭐ Da casa</span>' : ""}</div>
              ${it.desc ? `<div class="mi-desc">${it.desc}</div>` : ""}
            </div>
            <div class="mi-price">${it.preco}</div>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("");
}

const painelComida = document.getElementById("menu-comida");
const painelBebida = document.getElementById("menu-bebida");

if (painelComida && painelBebida && typeof CARDAPIO !== "undefined") {
  painelComida.innerHTML = montarMenu(CARDAPIO.comida);
  painelBebida.innerHTML = montarMenu(CARDAPIO.bebida);

  /* ---- Troca de abas Comida / Bebida ---- */
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const alvo = tab.dataset.tab;
      painelComida.hidden = alvo !== "comida";
      painelBebida.hidden = alvo !== "bebida";
    });
  });
}

/* ---- PARALLAX das faixas de foto (funciona no PC e no celular) ---- */
const bands = document.querySelectorAll(".photo-band");
if (bands.length) {
  let ticking = false;
  function parallax() {
    const vh = window.innerHeight;
    bands.forEach((band) => {
      const bg = band.querySelector(".pb-bg");
      if (!bg) return;
      const rect = band.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return; // fora da tela: nem mexe
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // ~ -1 (embaixo) a +1 (em cima)
      bg.style.transform = `translateY(${(progress * -50).toFixed(1)}px)`;
    });
    ticking = false;
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(parallax); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", parallax);
  parallax();
}

/* ---- GALERIA: clicar pra ampliar (lightbox) ---- */
const galeria = Array.from(document.querySelectorAll(".gallery-item"));
const lb = document.getElementById("lightbox");
if (galeria.length && lb) {
  const lbImg = lb.querySelector(".lb-img");
  const lbCount = lb.querySelector(".lb-count");
  let atual = 0;

  function mostrar(i) {
    atual = (i + galeria.length) % galeria.length;
    const foto = galeria[atual];
    lbImg.src = foto.src;
    lbImg.alt = foto.alt;
    lbCount.textContent = `${atual + 1} / ${galeria.length}`;
  }
  function abrir(i) { mostrar(i); lb.hidden = false; document.body.style.overflow = "hidden"; }
  function fechar() { lb.hidden = true; document.body.style.overflow = ""; }

  galeria.forEach((foto, i) => foto.addEventListener("click", () => abrir(i)));
  lb.querySelector(".lb-close").addEventListener("click", fechar);
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); mostrar(atual - 1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); mostrar(atual + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) fechar(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
}

/* ---- GALERIA (celular): setas pra deslizar o carrossel ---- */
const galScroller = document.querySelector(".gallery");
const galPrev = document.querySelector(".gal-prev");
const galNext = document.querySelector(".gal-next");
if (galScroller && galPrev && galNext) {
  const passo = () => galScroller.clientWidth * 0.84;
  galPrev.addEventListener("click", () => galScroller.scrollBy({ left: -passo(), behavior: "smooth" }));
  galNext.addEventListener("click", () => galScroller.scrollBy({ left: passo(), behavior: "smooth" }));
}

/* ---- RESERVA: monta a mensagem e abre o WhatsApp ---- */
// IMPORTANTE: troque o número abaixo pelo WhatsApp da chácara (55 + DDD + número)
const WHATSAPP = "5592993967080";

function enviarReserva(e) {
  e.preventDefault();
  const nome = document.getElementById("r-nome").value.trim();
  const data = document.getElementById("r-data").value;
  const pessoas = document.getElementById("r-pessoas").value;
  const obs = document.getElementById("r-obs").value.trim();

  const dataBR = data ? data.split("-").reverse().join("/") : "";
  let msg = `Olá! Quero fazer uma reserva na Chácara Lago JB.%0A`;
  msg += `*Nome:* ${nome}%0A`;
  msg += `*Data:* ${dataBR}%0A`;
  msg += `*Pessoas:* ${pessoas}`;
  if (obs) msg += `%0A*Obs:* ${obs}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURI(msg)}`, "_blank");
  return false;
}

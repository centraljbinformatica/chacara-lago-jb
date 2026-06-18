# Histórico do Projeto — Site Chácara Lago JB

> Documento de histórico e contexto do site. Reúne **o objetivo**, **o que já foi feito**,
> **as decisões** e **o que ainda falta**. Serve como memória do projeto pra qualquer pessoa
> (ou IA) que pegar o trabalho do zero entender tudo.
>
> Última atualização: **18/06/2026**

---

## 1. O que é o site / objetivo

Site **gratuito e estático** (sem mensalidade, sem sistema pago) para a **Chácara Lago JB**,
uma **praia/área de lazer particular** em **Vila Amazônia, Parintins-AM**, do **sogro do dono do projeto**.

**Objetivo do site:**
- Apresentar o lugar de forma bonita e moderna (vitrine digital).
- Mostrar o **cardápio** (comidas e bebidas) que pode ser acessado por QR Code na hora.
- Passar as informações práticas: localização, ingresso, atrações, contato/WhatsApp e Instagram.
- Ser leve, abrir rápido no celular e funcionar mesmo com internet ruim no local.

**Onde está no ar:**
- Site: https://chacara-lago-jb.vercel.app/
- Repositório: `centraljbinformatica/chacara-lago-jb` (GitHub)
- Publicação: **Vercel**, deploy automático a cada `git push` (sai no ar em ~1 min).

**Identidade / marca:**
- Nome fixo: **Chácara Lago JB** (não mudar).
- Cores: azul `#1d3f70`, laranja `#f47a1d` (escuro `#d9641a`), fundo `#f6f8fb`, borda `#e3e9f0`.
- Instagram: **@chacaralagojb**.

---

## 2. Regras de conteúdo (combinados importantes)

Essas regras valem pra qualquer texto/visual novo no site:

1. **Nada de travessão / em-dash** nos textos ("cara de IA"). Usar vírgula, ponto ou parênteses.
2. **Não citar a marca "Baly"** nas descrições. Usar "energético de sabor X" (melancia, tropical).
3. **Nada exagerado ou grotesco** nos visuais e efeitos. Modernidade sim, com sutileza.
4. Manter o nome **Chácara Lago JB**.
5. No cardápio, o **nome já aparece na logo** — não repetir no subtítulo.

---

## 3. Estrutura dos arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página principal (capa, sobre, números, atrações, fotos, efeito morph, ingresso, contato). |
| `cardapio.html` | Página do cardápio (monta o menu via JS). |
| `menu.js` | **Dados do cardápio** (itens, preços, fotos). É aqui que se edita o cardápio. |
| `script.js` | Lógica: monta o menu, efeitos interativos (morph, contagem, tilt, reveal, etc). |
| `style.css` | Todo o visual e as animações. |
| `qrcode.html` | Gerador de QR Code apontando pro cardápio. |
| `processar-fotos.ps1` | Script PowerShell que padroniza fotos (recorta pra 400x400). |
| `COMO-EDITAR.md` | Guia rápido de como mexer no cardápio sem saber programar. |
| `img/cardapio/` | Fotos dos itens do cardápio. |
| `img/` e `midia/` | Imagens do site (capa, galeria, lago, arco-íris, etc). |

**Como editar o cardápio (resumo):** abrir `menu.js`, trocar `preco`, `desc` ou `img` do item.
Pra usar foto real, trocar o arquivo dentro de `img/cardapio/` mantendo o mesmo nome. Salvar, `git push`.

---

## 4. Cardápio atual (estado em 18/06/2026)

### Comidas

**Espetos** 🍢 — _acompanham arroz, farofa e batatonese/vinagrete. Medalhões vêm com molho mostarda e mel._
- Medalhão de Carne (carne e bacon) — R$25
- Medalhão de Frango (frango e bacon) — R$25
- Espeto de Carne — R$20
- Espeto de Frango — R$20
- Espeto de Calabresa — R$20
- Espeto Misto (carne e calabresa) — R$20

**Petiscos** 🍟 _(todos servem até 3 pessoas)_
- Isca de Pirarucu (500g) — R$50
- Bolinho de Piracuí (12 un.) — R$35
- Isca de Frango (400g) — R$35
- Calabresa Acebolada (400g) — R$30
- Batata Frita Rústica (400g) — R$25
- Batata Frita Palito (400g) — R$25

### Bebidas

**Cervejas** 🍺
- Corona — R$10 · Heineken — R$10 · Budweiser — R$10
- Original Antárctica — R$5

**Drinks** 🍹 — **PROMO: 2 drinks por R$30** (na unidade R$20 cada)
- _Subgrupo "🐂 Caprichoso Vs Garantido":_
  - **Caprichoso** — Curaçau, refrigerante de limão e gelo — R$20
  - **Garantido** — Vodka, energético de melancia e gelo (ou gin) — R$20
  - _(linha separadora laranja sutil)_
  - **Gin Tropical** — Gin, energético tropical e gelo (ou vodka) — R$20
- _Subgrupo "Long Neck":_
  - Cabaré ICE — R$10 · Skarloff ICE — R$10

**Refrigerantes** 🥤 _(em lata)_
- Coca-Cola (normal ou zero) — R$6 · Fanta (laranja) — R$6 · Baré — R$6

**Água** 💧 _(garrafa 500ml)_
- Água de Coco (natural, gelada) — R$10
- Mineral sem gás — R$3 · Mineral com gás — R$4

> **Tema cultural dos drinks:** inspirado no Festival de Parintins. **Garantido** = boi vermelho
> (vodka), **Caprichoso** = boi azul (curaçau). **Gin Tropical** é o neutro, não puxa pra nenhum boi.

---

## 5. Linha do tempo das alterações (mais recente em cima)

> Histórico real de commits do projeto. Resume cada etapa do trabalho.

1. **Linha separadora laranja + "+10 Atividades"** — separador dos drinks mais grosso (3px) e laranja; número "6 formas de curtir" virou "+10 Atividades".
2. **Correções mobile** — removidos os "orbs" de luz (marcavam a lateral, ficou estranho); números (stats) passam a mostrar os valores certos quando o efeito não roda, em vez de zerados.
3. **Foto da Fanta + separador** — foto da lata de Fanta laranja mais nítida; linha sutil separando os drinks dos bois do Gin Tropical.
4. **Pacote de efeitos interativos** — corrige orbs, tira o 🔥 do "PROMO", adiciona ondas animadas, tilt 3D nas fotos, números que contam ao aparecer, títulos que se revelam palavra por palavra e galeria estilo cortina.
5. **Efeito morph + hover moderno** — seção de foto que se transforma em outra ao rolar (clip-path), selo de promoção que pulsa, ordem Caprichoso antes de Garantido.
6. **Drinks com subgrupos** — "Caprichoso Vs Garantido" + "Long Neck", e selo de promoção moderno (nota adesiva).
7. **Ajustes de bebidas** — Fanta só laranja; Coca/Baré/Fanta a R$6; água com gás R$4; nota da promo "2 drinks por R$30".
8. **Preços dos drinks** — R$20 cada (Caprichoso/Garantido/Gin Tropical); adicionado Skarloff ICE R$10.
9. **Tema do festival** — seção "Garantido Vs Caprichoso"; Garantido vira vodka (opcional gin), Gin Tropical opcional vodka; tiradas as cores das descrições.
10. **Remoção de itens** — saem Caipirinha e Pôr do Sol; entram os drinks do festival.
11. **Limpeza pós-estreia** — removidas infos de estreia; porções com gramas (servem até 3 pessoas).
12. **Header do cardápio** — sem o nome (só "Vila Amazônia, Parintins" + "Peça e pague na hora").
13. **Fotos e reorganização das bebidas** — Cervejas / Drinks / Refri / Água; fotos dos drinks e água de coco.
14. **Galeria e Instagram** — grade de fotos 4+4, card de Instagram, menu mobile com hambúrguer, parallax.
15. **Base do site** — capa com vídeo/imagem de praia, parallax, animações ao rolar, preços iniciais, mapa.

---

## 6. Efeitos interativos no site (resumo técnico)

Todos têm proteção `prefers-reduced-motion` (desligam pra quem pede menos animação) e mostram a
informação certa mesmo sem rodar (importante no mobile).

- **Morph no scroll:** uma foto vira outra ao rolar (clip-path + sticky), com legenda em crossfade.
- **Ondas animadas:** divisores de onda em SVG que balançam suavemente (hero e stats).
- **Números que sobem (count-up):** contam de 0 até o valor quando entram na tela. Mostram o valor final por padrão (mobile não fica zerado). Suportam prefixo (`+10`) e sufixo (`25+`, `100%`, `10h`).
- **Tilt 3D:** fotos da galeria inclinam levemente seguindo o mouse (só em telas com mouse).
- **Reveal palavra por palavra:** títulos das seções aparecem palavra a palavra.
- **Galeria cortina:** fotos entram alternando dos lados ao rolar (telas largas).
- **Hover moderno:** cards sobem, ícones giram leve, fotos dão zoom suave.

**Números (stats) atuais:** 25+ Itens no cardápio · +10 Atividades · 100% Pé na areia · 10h Abrimos às.

---

## 7. Consultoria de negócio (decisões fora do código)

**Problema da internet no local (pagamento):** o sinal de celular é ruim, o que travou as
maquininhas na estreia. Recomendações dadas:
- **Base em dinheiro** sempre disponível.
- **PIX** (taxa zero) quando der sinal.
- Curto prazo: testar **maquininha de celular da InfinitePay**.
- Futuro (meta): **Starlink Mini** (kit ~R$499–799 em promoção) + plano Residencial (~R$236/mês) ou Modo de Espera (~R$36/mês). Comprar no site oficial starlink.com ou revenda autorizada (Autotrac, MMImportX). Instalação simples; precisa de energia (20–40W, dá pra rodar em bateria/power station).

**Precificação dos drinks:** custo dos ingredientes ÷ 0,30 (ingredientes = 25–35% do preço de venda).
Drinks fixados em R$20 pra viabilizar o happy hour "2 por R$30".

**Ingresso:** R$5. Crianças até 5 anos não pagam.

---

## 8. Pendências / próximos passos

- [ ] **Planilha de custos** dos drinks (quando o usuário trouxer os custos reais: gin, vodka/Smirnoff, energéticos, curaçau, copo/taça, gelo).
- [ ] Gerar o **QR Code** (`qrcode.html`) apontando pra URL real do cardápio.
- [ ] Criar/reivindicar o **Perfil da Empresa no Google** ("Chácara JB").
- [ ] Confirmar os **números de WhatsApp** (assumido prefixo 9).
- [ ] (Opcional) Lista de compras dos ingredientes dos drinks.
- [ ] (Opcional) Texto de divulgação pra Instagram/WhatsApp.
- [ ] (Opcional) Efeitos que sobraram da lista: cursor personalizado + brilho (spotlight) nos botões.

---

_Fim do histórico. Manter este arquivo atualizado a cada nova rodada de mudanças._

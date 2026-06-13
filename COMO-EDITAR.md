# Guia rápido — Chácara Lago JB 🌿

Site simples, sem programação. Aqui está o que cada arquivo faz e como mexer.

## 📁 Os arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O **site principal** (fotos, ingresso, reserva, parceiros, contato) |
| `cardapio.html` | O **cardápio** que o QR Code abre (abas Comida/Bebida) |
| `menu.js` | **Os itens do cardápio** — é aqui que você edita comidas, bebidas e preços |
| `qrcode.html` | Gera o **QR Code** pra imprimir |
| `style.css` | As cores e o visual (mexa só se quiser) |
| `script.js` | Faz as abas e a reserva funcionarem (não precisa mexer) |
| `img/` | Pasta pra colocar as **fotos** |

---

## ✏️ Coisas que VOCÊ precisa trocar

Abra os arquivos com o Bloco de Notas (ou VS Code) e procure por estes textos:

1. **WhatsApp** — já configurado: principal `5592993967080` (Hailer) e `5592992152111` (João).
   Pra trocar, procure por esses números nos arquivos. Formato: `55` + DDD + número, **só dígitos**.
2. **Endereço / horário** — já preenchidos na seção "Onde estamos" do `index.html`
   (Rua Silva Barroso, Vila Amazônia — Parintins/AM; aberto a partir das 10h).
   Falta definir os **dias** e o **horário de fechamento**.
3. **Link do mapa** — hoje abre uma busca pelo endereço. Quando criar o Perfil no Google,
   troque pelo link exato do local.
4. **Preço do ingresso / idade de isenção** — está na seção "Ingresso" do `index.html`.

## 🍔 Editar o cardápio

Abra `menu.js`. Cada item é assim:
```js
{ nome: "Mandioca Frita", desc: "Crocante e quentinha.", preco: "32,00" },
```
- Troque o **preço** entre aspas.
- **Adicionar item:** copie uma linha inteira e cole embaixo.
- **Remover:** apague a linha inteira.

## 🖼️ Trocar as fotos

1. Coloque as fotos na pasta `img/` (ex: `rio.jpg`, `comida.jpg`).
2. No `index.html`, ache a seção "FOTOS" e troque os quadros cinza pelas fotos.
   (Me chame que eu faço essa parte rapidinho com você.)

---

## 🚀 Como colocar no ar (grátis) — GitHub Pages

1. Crie uma conta em https://github.com
2. Crie um repositório novo (ex: `chacara-lago-jb`) e envie estes arquivos.
3. Vá em **Settings → Pages → Branch: main → Save**.
4. Em alguns minutos seu site fica no ar em:
   `https://SEU-USUARIO.github.io/chacara-lago-jb/`
5. O **cardápio** fica em `.../chacara-lago-jb/cardapio.html` — é esse link que você coloca no `qrcode.html` pra gerar o QR das mesas.

## 🔎 Aparecer no Google

1. Crie um **Perfil da Empresa no Google** (grátis): https://business.google.com — isso coloca a chácara no Google Maps e na busca.
2. Lá você adiciona endereço, fotos, horário e o **link do site**.
3. O site já vem preparado com as informações que o Google lê (título, descrição e dados do negócio).

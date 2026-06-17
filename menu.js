/* =========================================================================
   CARDÁPIO DA CHÁCARA LAGO JB
   -------------------------------------------------------------------------
   COMO EDITAR (bem fácil):
   - preco: troque o número entre aspas.
   - desc:  descrição curta (opcional).
   - img:   foto do item. Deixe "" pra mostrar só o ícone.
            As fotos dos pratos são de banco livre (Pexels, uso comercial ok).
            Pra usar foto REAL sua: troque o arquivo dentro de img/cardapio/
            mantendo o mesmo nome, ou aponte para o novo arquivo aqui.
   - nota:  texto pequeno embaixo do título da categoria (opcional).
   - Adicionar item: copie uma linha { ... } e cole abaixo.  Remover: apague a linha.
   ========================================================================= */

const CARDAPIO = {
  comida: [
    {
      categoria: "Espetos",
      icone: "🍢",
      nota: "Todos acompanham arroz, farofa e batatonese/vinagrete. Os medalhões vêm com molho mostarda e mel.",
      itens: [
        { nome: "Medalhão de Carne",   desc: "Carne e bacon",     preco: "25,00", img: "img/cardapio/medalhao-carne.jpg" },
        { nome: "Medalhão de Frango",  desc: "Frango e bacon",    preco: "25,00", img: "img/cardapio/medalhao-frango.jpg" },
        { nome: "Espeto de Carne",     desc: "",                  preco: "20,00", img: "img/cardapio/espeto-carne.jpg" },
        { nome: "Espeto de Frango",    desc: "",                  preco: "20,00", img: "img/cardapio/espeto-frango.jpg" },
        { nome: "Espeto de Calabresa", desc: "",                  preco: "20,00", img: "img/cardapio/espeto-calabresa.jpg" },
        { nome: "Espeto Misto",        desc: "Carne e calabresa", preco: "20,00", img: "img/cardapio/espeto-misto.jpg" },
      ],
    },
    {
      categoria: "Petiscos",
      icone: "🍟",
      itens: [
        { nome: "Isca de Pirarucu",     desc: "500g · serve até 3 pessoas",         preco: "50,00", img: "img/cardapio/isca-pirarucu.jpg" },
        { nome: "Bolinho de Piracuí",   desc: "12 unidades · serve até 3 pessoas",  preco: "35,00", img: "img/cardapio/bolinho-piracui.jpg" },
        { nome: "Isca de Frango",       desc: "400g · serve até 3 pessoas",         preco: "35,00", img: "img/cardapio/isca-frango.jpg" },
        { nome: "Calabresa Acebolada",  desc: "400g · serve até 3 pessoas",         preco: "30,00", img: "img/cardapio/calabresa-acebolada.jpg" },
        { nome: "Batata Frita Rústica", desc: "400g · serve até 3 pessoas",         preco: "25,00", img: "img/cardapio/batata-rustica.jpg" },
        { nome: "Batata Frita Palito",  desc: "400g · serve até 3 pessoas",         preco: "25,00", img: "img/cardapio/batata-palito.jpg" },
      ],
    },
  ],

  bebida: [
    {
      categoria: "Cervejas",
      icone: "🍺",
      itens: [
        { nome: "Corona",              desc: "", preco: "10,00", img: "img/cardapio/corona.jpg" },
        { nome: "Heineken",            desc: "", preco: "10,00", img: "img/cardapio/heineken.jpg" },
        { nome: "Budweiser",           desc: "", preco: "10,00", img: "img/cardapio/budweiser.jpg" },
        { nome: "Original Antárctica", desc: "", preco: "5,00",  img: "img/cardapio/antarctica.jpg" },
      ],
    },
    {
      categoria: "Garantido Vs Caprichoso",
      icone: "🐂",
      itens: [
        { nome: "Garantido",  desc: "Vodka, energético de melancia e gelo (ou gin)", preco: "20,00", img: "img/cardapio/garantido.jpg" },
        { nome: "Caprichoso", desc: "Curaçau, refrigerante de limão e gelo",         preco: "20,00", img: "img/cardapio/caprichoso.jpg" },
      ],
    },
    {
      categoria: "Drinks",
      icone: "🍹",
      itens: [
        { nome: "Gin Tropical",  desc: "Gin, energético tropical e gelo (ou vodka)", preco: "20,00", img: "img/cardapio/gin-tropical.jpg" },
        { nome: "Cabaré ICE",    desc: "",                                preco: "10,00", img: "img/cardapio/cabare-ice.jpg" },
        { nome: "Skarloff ICE",  desc: "",                                preco: "10,00", img: "img/cardapio/skarloff-ice.jpg" },
      ],
    },
    {
      categoria: "Refrigerantes",
      icone: "🥤",
      nota: "Servidos em lata.",
      itens: [
        { nome: "Coca-Cola", desc: "Normal ou Zero",        preco: "7,00", img: "img/cardapio/coca.jpg" },
        { nome: "Baré",      desc: "Refrigerante regional",  preco: "5,00", img: "img/cardapio/bare.jpg" },
      ],
    },
    {
      categoria: "Água",
      icone: "💧",
      nota: "Garrafa de 500ml.",
      itens: [
        { nome: "Água de Coco",         desc: "Natural, geladinha", preco: "10,00", img: "img/cardapio/agua-coco.jpg" },
        { nome: "Água Mineral sem gás", desc: "",                   preco: "3,00",  img: "img/cardapio/agua-sem-gas.jpg" },
        { nome: "Água Mineral com gás", desc: "",                   preco: "3,00",  img: "img/cardapio/agua-com-gas.jpg" },
      ],
    },
  ],
};

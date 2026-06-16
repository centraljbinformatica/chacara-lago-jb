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
        { nome: "Isca de Pirarucu",     desc: "",            preco: "50,00", img: "img/cardapio/isca-pirarucu.jpg" },
        { nome: "Bolinho de Piracuí",   desc: "12 unidades", preco: "35,00", img: "img/cardapio/bolinho-piracui.jpg" },
        { nome: "Isca de Frango",       desc: "",            preco: "35,00", img: "img/cardapio/isca-frango.jpg" },
        { nome: "Calabresa Acebolada",  desc: "",            preco: "30,00", img: "img/cardapio/calabresa-acebolada.jpg" },
        { nome: "Batata Frita Rústica", desc: "",            preco: "25,00", img: "img/cardapio/batata-rustica.jpg" },
        { nome: "Batata Frita Palito",  desc: "",            preco: "25,00", img: "img/cardapio/batata-palito.jpg" },
      ],
    },
  ],

  bebida: [
    {
      categoria: "Alcoólicos",
      icone: "🍺",
      itens: [
        { nome: "Corona",              desc: "", preco: "10,00", img: "img/cardapio/corona.jpg" },
        { nome: "Heineken",            desc: "", preco: "10,00", img: "img/cardapio/heineken.jpg" },
        { nome: "Cabaré ICE",          desc: "", preco: "10,00", img: "img/cardapio/cabare-ice.jpg" },
        { nome: "Budweiser",           desc: "", preco: "10,00", img: "img/cardapio/budweiser.jpg" },
        { nome: "Original Antárctica", desc: "", preco: "5,00",  img: "img/cardapio/antarctica.jpg" },
      ],
    },
    {
      categoria: "Drinks",
      icone: "🍹",
      itens: [
        { nome: "Caipirinha", desc: "Limão, açúcar e cachaça", preco: "12,00", img: "" },
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
        { nome: "Água de Coco",         desc: "Natural, geladinha", preco: "10,00", img: "" },
        { nome: "Água Mineral sem gás", desc: "",                   preco: "3,00",  img: "img/cardapio/agua-sem-gas.jpg" },
        { nome: "Água Mineral com gás", desc: "",                   preco: "3,00",  img: "img/cardapio/agua-com-gas.jpg" },
      ],
    },
  ],
};

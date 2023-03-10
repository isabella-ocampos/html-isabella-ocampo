document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    { name: "mushu", img: "images/mushu.jpg" },
    { name: "leon", img: "images/leon.jpg" },
    { name: "moana", img: "images/moana.jpg" },
    { name: "nemo", img: "images/nemo.jpg" },
    { name: "rapunzel", img: "images/rapunzel.jpg" },
    { name: "rata", img: "images/rata.jpg" },
    { name: "mushu", img: "images/mushu.jpg" },
    { name: "leon", img: "images/leon.jpg" },
    { name: "moana", img: "images/moana.jpg" },
    { name: "nemo", img: "images/nemo.jpg" },
    { name: "rapunzel", img: "images/rapunzel.jpg" },
    { name: "rata", img: "images/rata.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});

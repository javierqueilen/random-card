window.onload = function() {
    let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let tipos = ["spade", "suit", "heart", "dinamond"];
    let number = document.querySelector('.number');
    this.console.log(tipos.length);

    number.innerHTML = cartas[Math.floor(Math.random()* cartas.length)];
    number.classList.add(tipos[Math.floor(Math.random()* tipos.length)]);
};
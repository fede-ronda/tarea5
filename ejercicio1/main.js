var colorRojo = document.getElementById("rojo")
var colorAzul = document.getElementById("azul")
var colorVerde = document.getElementById("verde")

rojo.addEventListener('click', function() {
    document.querySelector("body").style.background = ["Red"];
});

azul.addEventListener('click', function() {
    document.querySelector("body").style.background = ["Blue"];
});

verde.addEventListener('click', function() {
    document.querySelector("body").style.background = ["Green"];
});

let img = document.getElementById("lampada");
let lampLigada = "https://www.w3schools.com/js/pic_bulbon.gif";
let lampDesligada = "https://www.w3schools.com/js/pic_bulboff.gif";

function ligaOuDesliga() {
  if (img.src == lampLigada) {
    img.src = lampDesligada;
  } else {
    img.src = lampLigada;
  }
}

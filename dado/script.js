const quadrado = document.querySelector(".quadrado");
const display = document.querySelector("p");
const botaoRodar = document.querySelector(".rodar");
const botaoZerar = document.querySelector(".zerar");

function rodar() {
  const numeros = parseInt(Math.random() * (7 - 1) + 1);
  quadrado.classList.add(`__${numeros}`);
  // if (numeros === 1) {
  //   quadrado.classList.add("__1");
  // } else if (numeros === 2) {
  //   quadrado.classList.add("__2");
  // } else if (numeros === 3) {
  //   quadrado.classList.add("__3");
  // } else if (numeros === 4) {
  //   quadrado.classList.add("__4");
  // } else if (numeros === 5) {
  //   quadrado.classList.add("__5");
  // } else {
  //   quadrado.classList.add("__6");
  // }
  quadrado.classList.toggle("rotate-center");
  botaoRodar.setAttribute("disabled", "");
}

function apagar() {
  quadrado.classList.remove(
    "__1",
    "__2",
    "__3",
    "__4",
    "__5",
    "__6",
    "rotate-center"
  );
  botaoRodar.removeAttribute("disabled", "");
}

botaoRodar.addEventListener("click", rodar);
botaoZerar.addEventListener("click", apagar);

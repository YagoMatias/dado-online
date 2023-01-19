// ======================== DADOS ==============================
const quadrado = document.querySelectorAll(".quadrado");
const botaoRodar = document.querySelector(".rodar");
const botaoZerar = document.querySelector(".zerar");
const display = document.querySelector(".display-content");

function rodar() {
  const sorteio = {
    numero: (numeros1 = parseInt(Math.random() * (7 - 1) + 1)),
    numero2: (numeros2 = parseInt(Math.random() * (7 - 1) + 1)),
    numero3: (numeros2 = parseInt(Math.random() * (7 - 1) + 1)),
  };
  // console.log(sorteio.numero);
  // console.log(sorteio.numero2);
  // console.log(sorteio.numero3);
  quadrado.forEach((item) => {
    quadrado[0].classList.add(`__${sorteio.numero}`);
    quadrado[1].classList.add(`__${sorteio.numero2}`);
    quadrado[2].classList.add(`__${sorteio.numero3}`);
    item.classList.toggle("rotate-center");
    botaoRodar.setAttribute("disabled", "");
  });
  dadoContent.forEach((item) => {
    if (item.classList.contains("doisDados")) {
      if (sorteio.numero > sorteio.numero2) {
        display.innerText = "1 ganhou";
      } else if (sorteio.numero < sorteio.numero2) {
        display.innerText = "2 ganhou";
      } else if (sorteio.numero === sorteio.numero2) {
        display.innerText = "empatou";
      } else "";
    } else if (item.classList.contains("tresDados")) {
    }
  });
}
function apagar() {
  quadrado.forEach((item) => {
    item.classList.remove(
      "__1",
      "__2",
      "__3",
      "__4",
      "__5",
      "__6",
      "rotate-center"
    );
  });
  botaoRodar.removeAttribute("disabled", "");
  display.innerText = "";
}

botaoRodar.addEventListener("click", rodar);
botaoZerar.addEventListener("click", apagar);

// =======================DROPDOWN==================================

const dropdown = document.querySelector("h3");
const listaDropdown = document.querySelector(".listaDropdown");

function abrirDropdown() {
  listaDropdown.classList.toggle("aberto");
}

dropdown.addEventListener("click", abrirDropdown);

// =======================QUANTIDADE DE DADOS =====================

const itemLista = document.querySelector(".listaDropdown");
const dadoContent = document.querySelectorAll(".dado-content");

itemLista.addEventListener("click", (event) => {
  if (event.target.matches("p")) {
    const botao = event.target;
    const action = botao.dataset.action;
    if (!action) {
    } else if (action === "primeiro") {
      dadoContent[1].classList.remove("doisDados");
      dadoContent[2].classList.remove("tresDados");
      listaDropdown.classList.remove("aberto");
    } else if (action === "segundo") {
      dadoContent[1].classList.add("doisDados");
      dadoContent[2].classList.remove("tresDados");
      listaDropdown.classList.remove("aberto");
    } else if (action === "terceiro") {
      dadoContent[2].classList.add("tresDados", "teste");
      dadoContent[1].classList.add("doisDados");
      listaDropdown.classList.remove("aberto");
    }
  }
  quadrado.forEach((item) => {
    item.classList.remove("rotate-center");
  });
});

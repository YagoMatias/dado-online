// ======================== DADOS ==============================
const quadrado = document.querySelectorAll(".quadrado");
const display = document.querySelector("p");
const botaoRodar = document.querySelector(".rodar");
const botaoZerar = document.querySelector(".zerar");

function rodar() {
  const sorteio = {
    numero: (numeros1 = parseInt(Math.random() * (7 - 1) + 1)),
    numero2: (numeros2 = parseInt(Math.random() * (7 - 1) + 1)),
    numero3: (numeros2 = parseInt(Math.random() * (7 - 1) + 1)),
  };
  quadrado.forEach((item) => {
    quadrado[0].classList.add(`__${sorteio.numero}`);
    quadrado[1].classList.add(`__${sorteio.numero2}`);
    quadrado[2].classList.add(`__${sorteio.numero3}`);
    item.classList.toggle("rotate-center");
    botaoRodar.setAttribute("disabled", "");
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

itemLista.addEventListener("click", (event) => {
  if (event.target.matches("p")) {
    const botao = event.target;
    const action = botao.dataset.action;
    if (!action) {
      console.log("nada");
    } else if (action === "primeiro") {
      quadrado[1].classList.remove("doisDados");
      quadrado[2].classList.remove("tresDados");
      listaDropdown.classList.remove("aberto");
    } else if (action === "segundo") {
      quadrado[1].classList.add("doisDados");
      quadrado[2].classList.remove("tresDados");
      listaDropdown.classList.remove("aberto");
    } else if (action === "terceiro") {
      quadrado[2].classList.add("tresDados");
      listaDropdown.classList.remove("aberto");
    }
  }
});

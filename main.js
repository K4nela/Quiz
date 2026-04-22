import {mostrarTela} from "./src/view/mostrarTela.js"

mostrarTela("#page-home");

document.querySelector("#button-init").addEventListener("click", () => {
    mostrarTela("#page-quiz");
    mostrarPergunta();
});


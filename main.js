import {mostrarTelaView} from "./src/view/mostrarTelaView.js"
import { carregarPergunta, fluxoDePerguntas } from "./src/view/paginaQuizView.js";
let indiceAtual = 0;

mostrarTelaView("#page-home");

//navega para a página de quiz
document.querySelector("#button-init").addEventListener("click", () => {
    mostrarTelaView("#page-quiz");

    indiceAtual = 0; // reset
    carregarPergunta(indiceAtual);
    fluxoDePerguntas(); // chama só uma vez
});
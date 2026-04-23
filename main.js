import {mostrarTelaView} from "./src/view/mostrarTelaView.js"
import {carregarPergunta, fluxoDePerguntas, pontuacaoTotal} from "./src/view/paginaQuizView.js";

mostrarTelaView("#page-home");

document.querySelector("#button-init").addEventListener("click", () => {
    mostrarTelaView("#page-quiz");
    carregarPergunta(0);
    fluxoDePerguntas("#page-results");
});

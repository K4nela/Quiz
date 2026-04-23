import {mostrarTelaView} from "./src/view/mostrarTelaView.js"

mostrarTelaView("#page-home");

//navega para a página de quiz
document.querySelector("#button-init").addEventListener("click", () => {
    mostrarTelaView("#page-quiz");

    // document.querySelector("#question").innerHTML = `${listaDePerguntas[0].pergunta}`
    // document.querySelector("#option1").innerHTML = `${listaDePerguntas[0].opcao[0].texto}`
    // document.querySelector("#option2").innerHTML = `${listaDePerguntas[0].opcao[1].texto}`
    // document.querySelector("#option3").innerHTML = `${listaDePerguntas[0].opcao[2].texto}`
});


import {listaDePerguntas} from "../data/perguntasData.js";
import {mostrarTelaView} from "./mostrarTelaView.js";
import {resultado} from "./paginaResultsView.js";

export let pontuacaoTotal = 0;
export let indiceAtual = 0;

export function carregarPergunta(indice) {
    document.querySelector("#question").innerHTML = (indice + 1) + " - " + listaDePerguntas[indice].pergunta;

    document.querySelectorAll(".answer").forEach((opcao, j) => {
        opcao.innerHTML = listaDePerguntas[indice].opcao[j].texto;
    });
}

export const fluxoDePerguntas = (proximaPagina) => {
    document.querySelectorAll(".answer").forEach((opcao, j) => {
        opcao.onclick = () => {
            console.log("Click", j)
            const peso = listaDePerguntas[indiceAtual].opcao[j].peso;

            pontuacaoTotal += peso
            indiceAtual++;

            if (indiceAtual < listaDePerguntas.length) {
                carregarPergunta(indiceAtual);

            } else {
                document.querySelector("#soma").innerHTML = pontuacaoTotal;
                resultado(pontuacaoTotal);
                mostrarTelaView(proximaPagina);
            }
        };
    });
}

export function resetQuiz() {
    pontuacaoTotal = 0;
    indiceAtual = 0;
    carregarPergunta(0);
    mostrarTelaView("#page-home");
}

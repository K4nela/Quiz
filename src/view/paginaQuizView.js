import {listaDePerguntas} from "../data/perguntasData.js";
import {listaDePersonagens} from "../data/personagensData.js";

const opcoes = document.querySelectorAll(".answer");
let indiceAtual = 0;
//mostra as opcoes de acordo com apergunra

//carrega a pergunta de acordo com os índices
export function carregarPergunta(indice){
    question.innerHTML=listaDePerguntas[indice].pergunta;
    opcoes.forEach((opcao,j)=>{
        opcao.innerHTML=
            listaDePerguntas[indice].opcao[j].texto;
    });

}

/*
//faz o fluxo de perguntas alterando o índice através da atrualização de ínices
export function fluxoDePerguntas(){
    opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        indiceAtual++;

        if (indiceAtual < listaDePerguntas.length) {
            carregarPergunta(indiceAtual);
        } else {
            console.log("acabou o quiz");
        }
    });
}); 
}
*/

export function fluxoDePerguntas(){
opcoes.forEach((opcao, j) => {
    opcao.addEventListener("click", () => {

        const peso = listaDePerguntas[indiceAtual].opcao[j].peso;

        pontuacaoTotal += peso;

        indiceAtual++;

        if (indiceAtual < listaDePerguntas.length) {
            carregarPergunta(indiceAtual);
        } else {
            console.log("Pontuação final:", pontuacaoTotal);
        }
    });
});
}

//console.log(carregarPergunta(3))


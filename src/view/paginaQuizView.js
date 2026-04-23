import {listaDePerguntas} from "../data/perguntasData.js";
import {listaDePersonagens} from "../data/personagensData.js";

const opcoes = document.querySelectorAll(".answer");

//mostra as opcoes de acordo com apergunra


function carregarPergunta(indice){

    question.innerHTML=
        listaDePerguntas[indice].pergunta;

    opcoes.forEach((opcao,j)=>{
        opcao.innerHTML=
            listaDePerguntas[indice].opcao[j].texto;
    });

}

console.log(carregarPergunta(1))
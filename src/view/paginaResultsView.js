import {listaDePersonagens} from "../data/personagensData.js";
import {pontuacaoTotal, resetQuiz} from "./paginaQuizView.js";

//verificar qual personagem se parece mais com o resultado
export function getPersonagem(pontuacaoTotal){
    return listaDePersonagens.find(personagem => pontuacaoTotal <= personagem.numValue);
}

//exibir as informações na tela
export function resultado(pontuacaoTotal){
    const personagemFinal = getPersonagem(pontuacaoTotal);
    console.log(personagemFinal)

    document.querySelector("#imagem").src = personagemFinal.img;
    document.querySelector("#name-character").innerHTML = personagemFinal.name;
    document.querySelector("#description-character").innerHTML = personagemFinal.description;

    document.querySelector("#button-reset").addEventListener("click", resetQuiz);
}
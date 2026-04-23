import {Pergunta} from "../model/perguntasModel.js";
import {Opcoes} from "../model/perguntasModel.js";

export function criarPergunta(pergunta, ...opcoes){//cria perguntasModel atribuídas a suas opcoes
    return new Pergunta(pergunta, ...opcoes) //cria um objeto pergunta
}

export function criarOpcoes(texto, peso){//cria opcoes e seus respectivos pesos
    return new Opcoes(texto, peso)
}
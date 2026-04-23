import {Pergunta} from "../model/perguntasModel.js";
import {Opcoes} from "../model/perguntasModel.js";

export function criarPergunta(pergunta, ...opcoes){
    return new Pergunta(pergunta, ...opcoes) 
}

export function criarOpcoes(texto, peso){
    return new Opcoes(texto, peso)
}

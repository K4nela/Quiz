import { Personagem } from "../model/personagensModel.js";

export function criarPersonagem (nome, description, img, numValue) {
    return new Personagem(nome, description, img, numValue)
}
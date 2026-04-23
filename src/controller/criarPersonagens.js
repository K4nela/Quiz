import { Personagem } from "../model/personagens";

function criarPersonagens (nome, description, img, numValue) {
    return new Personagem(nome, description, img, numValue)
}
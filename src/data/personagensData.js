import {criarPersonagem} from "../controller/personagensController.js";

export const listaDePersonagens = []

listaDePersonagens.push(
    criarPersonagem("Naruto",
        "Você é o Naruto, determinado e muito leal com quem você escolhe pra ter no seu caminho",
        ".png",
        10
    ),

    criarPersonagem("Sasuke",
        "Você é o Sasuke, focado na própria evolução com uma personalidade forte.",
        ".png",
        20
    ),

    criarPersonagem("Sakura",
        "Você é a Sakura, gentil e foca muito no bem estar das pessoas ao seu redor.",
        ".png",
        30
    )
);

console.log(listaDePersonagens)

import {criarPersonagem} from "../controller/personagensController.js";

export const listaDePersonagens = []

listaDePersonagens.push(
    criarPersonagem("Naruto",
        "Você é o Naruto, determinado e muito leal com quem você escolhe pra ter no seu caminho",
        "https://i.pinimg.com/webp85/736x/bd/bc/bb/bdbcbb3afc0324f6129521da9e73a8b3.webp",
        10
    ),

    criarPersonagem("Sasuke",
        "Você é o Sasuke, focado na própria evolução com uma personalidade forte.",
        "https://i.pinimg.com/736x/7b/cf/15/7bcf15ada907d42f5ff207721b4ad0de.jpg",
        20
    ),

    criarPersonagem("Sakura",
        "Você é a Sakura, gentil e foca muito no bem estar das pessoas ao seu redor.",
        "https://i.pinimg.com/1200x/d8/20/fa/d820fa185da347fe59405bebe7c33fec.jpg",
        30
    )
);

// console.log(listaDePersonagens)

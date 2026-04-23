import {criarPersonagem} from "../controller/personagensController.js";

export const listaDePersonagens = []

listaDePersonagens.push(
    criarPersonagem("Naruto",
        "Você é o Naruto! Determinado, energético e nunca desiste dos seus objetivos. Valoriza profundamente a amizade e sempre luta para proteger quem ama, mesmo diante das maiores dificuldades.",
        "https://i.pinimg.com/webp85/736x/bd/bc/bb/bdbcbb3afc0324f6129521da9e73a8b3.webp",
        10
    ),

    criarPersonagem("Sasuke",
        "Você é o Sasuke! Inteligente, estratégico e focado nos seus objetivos. Prefere agir com calma e precisão, valorizando a força e a superação pessoal acima de tudo.",
        "https://i.pinimg.com/736x/7b/cf/15/7bcf15ada907d42f5ff207721b4ad0de.jpg",
        20
    ),

    criarPersonagem("Sakura",
        "Você é a Sakura! Forte, dedicada e extremamente leal. Apesar das inseguranças, demonstra grande coragem e sempre busca evoluir para proteger as pessoas importantes para você.",
        "https://i.pinimg.com/1200x/d8/20/fa/d820fa185da347fe59405bebe7c33fec.jpg",
        30
    )
);

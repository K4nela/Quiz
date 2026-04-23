import {criarPergunta} from "../controller/perguntasController.js";
import {criarOpcoes} from "../controller/perguntasController.js";

// criarPergunta("Em um problema difícil, você tende a:",
//     criarOpcoes("Agir na coragem e improvisar", 1),
//     criarOpcoes("Analisar sozinho antes de agir", 2),
//     criarOpcoes("Buscar ajudar todos envolvidos", 3)
// )

export let listaDePerguntas = [];

listaDePerguntas.push(
    criarPergunta(
        "Em um problema difícil, você tende a:",
        criarOpcoes("Agir na coragem e improvisar", 1),
        criarOpcoes("Analisar sozinho antes de agir", 2),
        criarOpcoes("Buscar ajudar todos envolvidos", 3)
    ),

    criarPergunta(
        "Num grupo, você costuma ser:",
        criarOpcoes("Quem motiva todo mundo", 1),
        criarOpcoes("Quem lidera estrategicamente", 2),
        criarOpcoes("Quem cuida da harmonia do grupo", 3)
    ),

    criarPergunta(
        "Quando alguém te decepciona você:",
        criarOpcoes("Perdoa e insiste na amizade", 1),
        criarOpcoes("Se afasta e segue seu caminho", 2),
        criarOpcoes("Tenta conversar e compreender", 3)
    ),

    criarPergunta(
        "Seu maior ponto forte é:",
        criarOpcoes("Persistência", 1),
        criarOpcoes("Disciplina", 2),
        criarOpcoes("Sensibilidade", 3)
    ),

    criarPergunta(
        "Ao enfrentar competição você:",
        criarOpcoes("Vai com tudo e confia em si", 1),
        criarOpcoes("Planeja vencer com técnica", 2),
        criarOpcoes("Procura equilíbrio e eficiência", 3)
    ),

    criarPergunta(
        "Se um amigo está em perigo você:",
        criarOpcoes("Corre para ajudar sem pensar", 1),
        criarOpcoes("Avalia a melhor estratégia primeiro", 2),
        criarOpcoes("Busca proteger e apoiar emocionalmente", 3)
    ),

    criarPergunta(
        "O que mais te move?",
        criarOpcoes("Sonhos grandes", 1),
        criarOpcoes("Superação pessoal", 2),
        criarOpcoes("Cuidar das pessoas", 3)
    ),

    criarPergunta(
        "Em decisões importantes você usa mais:",
        criarOpcoes("Instinto", 1),
        criarOpcoes("Razão", 2),
        criarOpcoes("Coração", 3)
    ),

    criarPergunta(
        "Como lida com fracasso?",
        criarOpcoes("Levanta e tenta de novo", 1),
        criarOpcoes("Usa como aprendizado estratégico", 2),
        criarOpcoes("Reflete e amadurece com isso", 3)
    ),

    criarPergunta(
        "Seu estilo ideal de liderança seria:",
        criarOpcoes("Inspirar pelo entusiasmo", 1),
        criarOpcoes("Comandar com estratégia", 2),
        criarOpcoes("Guiar cuidando das pessoas", 3)
    )
);

console.log(listaDePerguntas[0].opcao[0].texto)

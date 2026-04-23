import {criarPergunta} from "../controller/perguntasController.js";
import {criarOpcoes} from "../controller/perguntasController.js";

// criarPergunta("Em um problema difícil, você tende a:",
//     criarOpcoes("Agir na coragem e improvisar", 10),
//     criarOpcoes("Analisar sozinho antes de agir", 20),
//     criarOpcoes("Buscar ajudar todos envolvidos", 30)
// )

export let listaDePerguntas = [];

listaDePerguntas.push(
    criarPergunta(
        "Em um problema difícil, você tende a:",
        criarOpcoes("Agir na coragem e improvisar", 10),
        criarOpcoes("Analisar sozinho antes de agir", 20),
        criarOpcoes("Buscar ajudar todos envolvidos", 30)
    ),

    criarPergunta(
        "Num grupo, você costuma ser:",
        criarOpcoes("Quem motiva todo mundo", 10),
        criarOpcoes("Quem lidera estrategicamente", 20),
        criarOpcoes("Quem cuida da harmonia do grupo", 30)
    ),

    criarPergunta(
        "Quando alguém te decepciona você:",
        criarOpcoes("Perdoa e insiste na amizade", 10),
        criarOpcoes("Se afasta e segue seu caminho", 20),
        criarOpcoes("Tenta conversar e compreender", 30)
    ),

    criarPergunta(
        "Seu maior ponto forte é:",
        criarOpcoes("Persistência", 10),
        criarOpcoes("Disciplina", 20),
        criarOpcoes("Sensibilidade", 30)
    ),

    criarPergunta(
        "Ao enfrentar competição você:",
        criarOpcoes("Vai com tudo e confia em si", 10),
        criarOpcoes("Planeja vencer com técnica", 20),
        criarOpcoes("Procura equilíbrio e eficiência", 30)
    ),

    criarPergunta(
        "Se um amigo está em perigo você:",
        criarOpcoes("Corre para ajudar sem pensar", 10),
        criarOpcoes("Avalia a melhor estratégia primeiro", 20),
        criarOpcoes("Busca proteger e apoiar emocionalmente", 30)
    ),

    criarPergunta(
        "O que mais te move?",
        criarOpcoes("Sonhos grandes", 10),
        criarOpcoes("Superação pessoal", 20),
        criarOpcoes("Cuidar das pessoas", 30)
    ),

    criarPergunta(
        "Em decisões importantes você usa mais:",
        criarOpcoes("Instinto", 10),
        criarOpcoes("Razão", 20),
        criarOpcoes("Coração", 30)
    ),

    criarPergunta(
        "Como lida com fracasso?",
        criarOpcoes("Levanta e tenta de novo", 10),
        criarOpcoes("Usa como aprendizado estratégico", 20),
        criarOpcoes("Reflete e amadurece com isso", 30)
    ),

    criarPergunta(
        "Seu estilo ideal de liderança seria:",
        criarOpcoes("Inspirar pelo entusiasmo", 10),
        criarOpcoes("Comandar com estratégia", 20),
        criarOpcoes("Guiar cuidando das pessoas", 30)
    )
);

console.log(listaDePerguntas[0].opcao[0].texto)

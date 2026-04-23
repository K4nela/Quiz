// Sugestão para o esquema de perguntas e respostas. Temos aqui um objeto perguntas que terá como atributos: uma string
// para o texto da pergunta e uma lista de objetos, que conterão os seguintes atributos: uma string opção para receber o
// texto da opção e a respectiva pontuação para os personagens

//Aqui vcs fiquem a vontade pra modificar, não concordei tanto com essa ideia do chat nn... mas faz sentido
const perguntas = [
    {
        pergunta: "Qual sua principal característica?",
        resposta: [
            {
                opcao1: "Coragem",
                pontos: {
                    personagem1: 3,
                    personagem2: 2,
                    personagem3: 1
                }
            },

            {
                opcao2: "Inteligência",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            },

            {
                opcao3: "Disciplina",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "Como você age em uma batalha?",
        resposta: [
            {
                opcao1: "Vou pra cima sem medo",
                pontos: {
                    personagem1: 3,
                    personagem2: 2,
                    personagem3: 1
                }
            },

            {
                opcao2: "Penso antes de agir",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            },

            {
                opcao3: "Apoio meus aliados",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "O que mais te motiva?",
        resposta: [
            {
                opcao1: "Proteger quem eu amo",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Ser mais forte",
                pontos: {
                    personagem1: 2,
                    personagem2: 3,
                    personagem3: 1
                }
            },

            {
                opcao3: "Evitar conflitos",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "Como você toma decisões?",
        resposta: [
            {
                opcao1: "Pela emoção",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Pela lógica",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            },

            {
                opcao3: "Equilíbrio entre os dois",
                pontos: {
                    personagem1: 1,
                    personagem2: 2,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "Qual seu maior defeito?",
        resposta: [
            {
                opcao1: "Impulsividade",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Frieza",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 1
                }
            },

            {
                opcao3: "Preguiça",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "Como você lida com trabalho em equipe?",
        resposta: [
            {
                opcao1: "Sou o líder",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Dou suporte",
                pontos: {
                    personagem1: 1,
                    personagem2: 2,
                    personagem3: 3
                }
            },

            {
                opcao3: "Prefiro agir sozinho",
                pontos: {
                    personagem1: 2,
                    personagem2: 3,
                    personagem3: 1
                }
            }
        ]
    },

    {
        pergunta: "Qual habilidade você prefere?",
        resposta: [
            {
                opcao1: "Força e resistência",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            },

            {
                opcao2: "Técnicas avançadas",
                pontos: {
                    personagem1: 3,
                    personagem2: 2,
                    personagem3: 1
                }
            },

            {
                opcao3: "Estratégia",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            }
        ]
    },

    {
        pergunta: "Como você reage ao fracasso?",
        resposta: [
            {
                opcao1: "Evito passar por isso de novo",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            },

            {
                opcao2: "Tento de novo até conseguir",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao3: "Fico mais na minha",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            }
        ]
    },

    {
        pergunta: "Qual é seu objetivo final?",
        resposta: [
            {
                opcao1: "Ser reconhecido",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Ser o melhor",
                pontos: {
                    personagem1: 2,
                    personagem2: 3,
                    personagem3: 1
                }
            },

            {
                opcao3: "Viver em paz",
                pontos: {
                    personagem1: 2,
                    personagem2: 1,
                    personagem3: 3
                }
            }
        ]
    },

    {
        pergunta: "Como você reage a um problema inesperado?",
        resposta: [
            {
                opcao1: "Desesperado, mas vou com tudo",
                pontos: {
                    personagem1: 3,
                    personagem2: 1,
                    personagem3: 2
                }
            },

            {
                opcao2: "Espera e busca uma forma de resolver",
                pontos: {
                    personagem1: 1,
                    personagem2: 3,
                    personagem3: 2
                }
            },

            {
                opcao3: "Desisto e espero outro momento",
                pontos: {
                    personagem1: 1,
                    personagem2: 2,
                    personagem3: 3
                }
            }
        ]
    }
]

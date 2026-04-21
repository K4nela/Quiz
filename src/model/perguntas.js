// Sugestão para o esquema de perguntas e respostas. Temos aqui um objeto perguntas que terá como atributos: uma string
// para o texto da pergunta e uma lista de objetos, que conterão os seguintes atributos: uma string opção para receber o
// texto da opção e a respectiva pontuação para os personagens

//Aqui vcs fiquem a vontade pra modificar, não concordei tanto com essa ideia do chat nn... mas faz sentido
const perguntas = [
    {
        pergunta: "[Pergunta]",
        resposta: [
            {
                opcao1: "[Opcao1]",
                pontos: {
                    personagem1: 0,
                    personagem2: 0,
                    personagem3: 0
                }
            },

            {
                opcao2: "[Opcao2]",
                pontos: {
                    personagem1: 0,
                    personagem2: 0,
                    personagem3: 0
                }
            },

            {
                opcao3: "[Opcao3]",
                pontos: {
                    personagem1: 0,
                    personagem2: 0,
                    personagem3: 0
                }
            }
        ]
    }
]
// Sugestão para o esquema de Pergunta e respostas. Temos aqui um objeto Pergunta que terá como atributos: uma string
// para o texto da pergunta e uma lista de objetos, que conterão os seguintes atributos: uma string opção para receber o
// texto da opção e a respectiva pontuação para os personagens

//Aqui vocês fiquem a vontade para modificar, não concordei tanto com essa ideia do chat nn... mas faz sentido

export class Pergunta {
    constructor(pergunta, ...opcoes) {
        this.pergunta = pergunta;
        this.opcao = opcoes;
    }
}

export class Opcoes {

    constructor(texto, peso) {
        this.texto = texto;
        this.peso = peso;
    }
}
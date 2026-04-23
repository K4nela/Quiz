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

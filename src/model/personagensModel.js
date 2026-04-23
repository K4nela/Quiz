//  Vamos usar objetos para criar os personagens. Facilitando o acesso às propriedades para as chamadas na página de
//  resultados

export class Personagem {

    constructor (nome, description, img, numValue){
        this.name = nome;
        this.description = description;
        this.img = img;
        this.numValue = numValue;
    }
}
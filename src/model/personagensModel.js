//  Vamos usar objetos para criar os personagens. Facilitando o acesso às propriedades para as chamadas na página de
//  resultados

export class Personagem {

    constructor (name, description, img, numValue){
        this.name = name;
        this.description = description;
        this.img = img;
        this.numValue = numValue;
    }
}
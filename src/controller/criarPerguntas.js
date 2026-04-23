import {Pergunta, perguntas} from "../model/perguntas";
import {Opcoes} from "../model/perguntas";

function criarPerguntas(pergunta, opcoes){//cria perguntas atribuídas a suas opcoes
    let p = new Pergunta(pergunta, opcoes) //cria um objeto pergunta
    perguntas.push(p)//adiciona o objeto pergunta a uma lista de perguntas (string e opcoes)
    console.log(p);
}

function criarOpcoes(texto, peso1, peso2, peso3){//cria opcoes e seus respectivos pesos
    console.log(Opcoes);
    return new Opcoes(texto, peso1, peso2,peso3)
}
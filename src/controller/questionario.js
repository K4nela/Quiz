// Aqui adicionamos a lógica do quiz. Adicionaremos o processo de perguntas e respostas, modificando a div de respostas
// Como cada resposta tem um valor diferente independente de já ser predefinido; Vamos utilizar o appendChild para criar
// novas respostas atribuindo elas a uma nova pergunta

const pergunta = document.querySelector("#question");
const respostas = document.querySelector("#answer");
let contador = 0;


const selecionar = (resposta) => {
    document.querySelector(resposta).addEventListener("click", () =>{
        //próxima resposta
    })
}
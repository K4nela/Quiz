const pergunta = document.querySelector("#question");
const respostas = document.querySelector("#answer");
let contador = 0;

export function mostrarPergunta() {
    pergunta.textContent = perguntasModel[contador].pergunta;
}

const selecionar = (resposta) => {
    document.querySelector(resposta).addEventListener("click", () =>{
       
    })

}

function mostrarPergunta() {
    pergunta.textContent = perguntasModel[contador].pergunta;
}

export function mostrarTelaView(id){
    document.querySelector("#page-home").classList.add("hidden");
    document.querySelector("#page-quiz").classList.add("hidden");
    document.querySelector("#page-results").classList.add("hidden");

    document.querySelector(id).classList.remove("hidden");
}
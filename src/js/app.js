let lista = document.querySelector(".btn-plataformas")

let conteudo = document.querySelector(".btn-plataformas .plataformas")

lista.addEventListener("click", () => {
    conteudo.classList.toggle("ativo")
})
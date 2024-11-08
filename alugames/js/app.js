function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`)
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains("dashboard__item__img--rented"))
    {botao.classList.remove("dashboard__item__button--return")
    imagem.classList.remove("dashboard__item__img--rented")
    botao.textContent = 'devolver'
    }
    else{
        botao.classList.add("dashboard__item__button--return")
        imagem.classList.add("dashboard__item__img--rented")
        botao.textContent = 'alugar'
    }
}
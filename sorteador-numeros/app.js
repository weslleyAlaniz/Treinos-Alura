function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (quantidade <= ate - de){
    let sorteados = []
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = geradorDeNumero(de, ate);
        
        while(sorteados.includes(numero)){
            numero = geradorDeNumero(de, ate);
        }

    sorteados.push(numero)
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao()
}
    else{alert('Quantidade de numeros sorteados não pode ser maior a quantidade de numeros possiveis')}
}

function geradorDeNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }

}

function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value= '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
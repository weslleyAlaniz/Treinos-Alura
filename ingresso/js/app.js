function comprar() {
    //  Recuperar dados relevantes
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let qtdPista = document.getElementById('qtd-pista').textContent;
    let qtdInferior = document.getElementById('qtd-inferior').textContent;
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    let qdtComprada = document.getElementById("qtd").value;
    
    //Pegar selecionado e subtrair do total de ingressos

    if(tipoCadeira == 'inferior'){
        alert(qtdInferior)
    }
    if(tipoCadeira == 'superior'){
        alert(qtdSuperior)

    }
    if(tipoCadeira == "pista"){
        alert(qtdPista)

    }
    
    

}
function comprar() {
    //  Recuperar dados relevantes
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let qtdPista = document.getElementById('qtd-pista');
    let qtdInferior = document.getElementById('qtd-inferior');
    let qtdSuperior = document.getElementById('qtd-superior');
    let qdtComprada = document.getElementById("qtd").value;
    
    //Pegar selecionado e subtrair do total de ingressos

    if(tipoCadeira == 'inferior'){
      let newQtdInferior = qtdInferior.textContent - qdtComprada;
      if(newQtdInferior < 0){alert("ingressos esgotados");}
      else{
      qtdInferior.innerHTML = `<span id="qtd-pista">${newQtdInferior}</span>`}
        
    }
    if(tipoCadeira == 'superior'){
        let newQtdSuperior = qtdSuperior.textContent - qdtComprada;
        if (newQtdSuperior < 0) {alert("ingressos esgotados");}
        else{qtdSuperior.innerHTML = `<span id="qtd-pista">${newQtdSuperior}</span>`}
      
    }
    if(tipoCadeira == 'pista'){
      let newQtdPista = qtdPista.textContent - qdtComprada;
      if (newQtdPista < 0) {alert("ingressos esgotados")}
      else{qtdPista.innerHTML = `<span id="qtd-pista">${newQtdPista}</span>`}
        
        

    }
    
    

}


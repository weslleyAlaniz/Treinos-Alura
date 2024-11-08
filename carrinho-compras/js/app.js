let valorTotal;
limpar()

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorProduto = produto.split('$')[1]
    let quantidade = document.getElementById('quantidade').value;
    let preco = valorProduto * quantidade;
    let carrinho = document.getElementById('lista-produtos');

    if (quantidade == ""){alert("Selecione uma quantidade")}
     if (quantidade == 0){alert("Selecione uma quantidade")}
    else{
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    valorTotal = valorTotal + preco
    let tagTotal = document.getElementById("valor-total");
    tagTotal.textContent = `R$ ${valorTotal}`;
    }
    document.getElementById('quantidade').value = 0;
    

}

function limpar(){
    valorTotal = 0;
    document.getElementById("valor-total").textContent = 'R$ 0';
    document.getElementById('lista-produtos').textContent = '';
}


let nomeAmigo = document.getElementById('nome-amigo');
let amigosIncluidos = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio')
function adicionar() {
    if(amigosIncluidos.textContent == "") {
        amigosIncluidos.textContent = nomeAmigo.value;
    } else {amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeAmigo.value};
    nomeAmigo.value = ''
    
}

function sortear(){
    sorteio.innerHTML = ''
    let amigosArr = amigosIncluidos.textContent.split(', ')
    embaralha(amigosArr)
   for (let i = 0; i < amigosArr.length; i++) { 
    
    let proximoAmigo = (i === amigosArr.length - 1) ? amigosArr[0] : amigosArr[i + 1];

    sorteio.innerHTML = sorteio.innerHTML + `<p>${amigosArr[i]} ==> ${proximoAmigo}</p>`
}
    
    
}

// algoritmo Fisher–Yates 
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    };
};

function reiniciar(){
    amigosIncluidos.textContent = '';
    sorteio.innerHTML = '';
}
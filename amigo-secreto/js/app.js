let nomeAmigo = document.getElementById('nome-amigo');
let amigosIncluidos = document.getElementById('lista-amigos');

function adicionar() {
    if(amigosIncluidos.textContent == "") {
        amigosIncluidos.textContent = nomeAmigo.value;
    } else {amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeAmigo.value};
    nomeAmigo.value = ''
    
}

function sortear(){
    let amigosArr = amigosIncluidos.textContent.split(', ')
    embaralha(amigosArr)
    alert(amigosArr)
    
}

// algoritmo Fisher–Yates 
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
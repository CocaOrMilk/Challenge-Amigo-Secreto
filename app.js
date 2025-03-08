let amigos = [];

function adicionarAmigo() {
    let amigoSecreto = document.querySelector('input').value.trim();

    if (amigoSecreto === '') {
        alert('Campo não pode ser vazio, favor digitar um nome válido.');
        return;
    }

    if (amigos.includes(amigoSecreto)) {
        alert('Esse nome já foi adicionado.');
        limparCampo();
        return;
    }

    amigos.push(amigoSecreto);
    listaDeAmigo();
    console.log(amigos);

    limparCampo();
}

function listaDeAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = '';

    let item = document.createElement("li");
    item.textContent = `🎉 Amigo secreto sorteado: ${amigoSorteado}!`;
    resultadoLista.appendChild(item);
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
}


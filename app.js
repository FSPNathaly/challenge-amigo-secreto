let amigos = [];

function adicionarAmigo() {
    let nomeAmigoInput = document.getElementById('amigo');
    let listaAmigosElement = document.getElementById('listaAmigos');
    let nomeAmigo = nomeAmigoInput.value;

    if (nomeAmigo == '') {
        alert('Por favor, digite o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        nomeAmigoInput.value = '';
        return;
    }

    amigos.push(nomeAmigo);

    listaAmigosElement.innerHTML = '';
    for (let amigo of amigos) {
        listaAmigosElement.innerHTML += `<li>${amigo}</li>`;
    }

    nomeAmigoInput.value = '';
    nomeAmigoInput.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').focus();
}
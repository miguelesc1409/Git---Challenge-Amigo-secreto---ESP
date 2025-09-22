let amigos = []

function agregarAmigo(){
    let texto = document.getElementById('amigo');

    if (texto !== null){
        let ban= true;
        for (const elem of amigos){
            if(elem === texto.value){
                ban = false;
            }
        }
        
        if(ban){
            amigos.push(texto.value);
            texto.value = '';
            actualizarLista();
        }else{
            alert('El nombre ya está en la lista');
        }
    }else{
        alert('Por favor, inserte un nombre.');
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (const elem of amigos){
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = elem;
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    if(amigos.length !== 0){
        let numAl = Math.floor(Math.random() * amigos.length);
        console.log(numAl);
        let nomAmig = amigos[numAl];
        let resAmigo = document.getElementById('resultado');
        resAmigo.innerHTML = nomAmig;
    }else{
        alert('No hay amigos almacenados');
    }
}
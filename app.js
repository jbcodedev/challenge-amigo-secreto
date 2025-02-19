// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 01 - Crear un array para almacenar los nombres de amigos
let amigos = [];

// 02 - Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        //Si es valido se añade al arreglo
        amigos.push(nombreAmigo);
    }
    // Limpiar campo de entrada
    inputAmigo.value = "";
    // Actualizar lista en el HTML
    actualizarLista();
}
// 03 - Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let listaAmigosUI = document.getElementById('listaAmigos');
    // Limpiar contenido actual de la lista
    listaAmigosUI.innerHTML = "";

    // Iterar sobre el arreglo con un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosUI.appendChild(li);
    }
}
// 04 - Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validando amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles");
        return;
    }
    // Generacion indice aleatorio entre 0 y la longitud del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtencion de nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrando el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}
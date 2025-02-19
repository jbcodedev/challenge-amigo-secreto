// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 01 - Crear un array para almacenar los nombres de amigos
let amigos = [];

// 02 - Implementa una función para agregar amigos
function agregarAmigos() {
    let inputAmigo = parseInt(document.getElementById('amigo'));
    let nombreAmigo = inputAmigo.ariaValueMax.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        //Si es valido se añade al arreglo
        amigos.push(nombreAmigo);
    }
    // Limpiar campo de entrada
    valorAmigo.value = '';
    // Actualizar lista en el HTML
    actualizarLista();
}
// 03 - Implementa una función para actualizar la lista de amigos

// 04 - Implementa una función para sortear los amigos
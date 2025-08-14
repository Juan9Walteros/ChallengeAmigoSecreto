// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos al array
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre valido.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual
    actualizarListaAmigos();

    // Mostrar feedback en consola (opcional, para debugging)
    console.log('Amigo agregado:', nombreAmigo);
    console.log('Lista actual:', amigos);
}

// Función para mostrar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el array y crear elementos
    for (let i = 0; i < amigos.length; i++) {
        // Crear nuevo elemento de lista
        const li = document.createElement('li');

        // Agregar el nombre del amigo como texto
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue algunos nombres.');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;

    // Ocultar la lista visual
    const lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';

    // Feedback en consola (opcional)
    console.log('Amigo sorteado:', amigoSorteado);
}

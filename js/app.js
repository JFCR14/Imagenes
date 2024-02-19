
const accessKey = 'x9hkoSoAvZB15qBw1Y5iQnER4VTRrmz4La0w4WUnICY';
const baseUrl = 'https://api.unsplash.com/search/photos';
let currentPage = 1;
const perPage = 10;


const formulario = document.getElementById('formulario');
const terminoInput = document.getElementById('termino');
const resultadoDiv = document.getElementById('resultado');
const paginacionDiv = document.getElementById('paginacion');


formulario.addEventListener('submit', e => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const termino = terminoInput.value.trim(); // Obtener el término de búsqueda

   
    if (termino === '') {
        alert('Por favor, ingresa un término de búsqueda válido.');
        return;
    }

    
    buscarImagenes(termino);
});


async function buscarImagenes(termino) {
    try {
        const response = await fetch(`${baseUrl}?query=${termino}&page=${currentPage}&per_page=${perPage}&client_id=${accessKey}`);
        const data = await response.json();
        mostrarImagenes(data.results);
        mostrarPaginacion(data.total_pages);
    } catch (error) {
        console.error('Error al buscar imágenes:', error);
    }
}


function mostrarImagenes(imagenes) {
    resultadoDiv.innerHTML = ''; 

    imagenes.forEach(imagen => {
        const { urls, user, views } = imagen;

        const imagenElement = document.createElement('div');
        imagenElement.classList.add('imagen');

        const img = document.createElement('img');
        img.src = urls.small;
        img.alt = user.username;

        const autorInfo = document.createElement('p');
        autorInfo.textContent = `Autor: ${user.name}, Visualizaciones: ${views}`;

        imagenElement.appendChild(img);
        imagenElement.appendChild(autorInfo);

        resultadoDiv.appendChild(imagenElement);
    });
}


function mostrarPaginacion(totalPaginas) {
    paginacionDiv.innerHTML = ''; 

    for (let i = 1; i <= totalPaginas; i++) {
        const botonPagina = document.createElement('button');
        botonPagina.textContent = i;
        botonPagina.addEventListener('click', () => {
            currentPage = i;
            const termino = terminoInput.value.trim();
            buscarImagenes(termino);
        });
        paginacionDiv.appendChild(botonPagina);
    }
}


window.onload = () => {
    const terminoInicial = 'nature'; 
    terminoInput.value = terminoInicial;
    buscarImagenes(terminoInicial);
};

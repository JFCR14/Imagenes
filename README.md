# Imagenes
Proyecto de JS con un buscador de imagenes
-----------------------------------------------------
Este proyecto consiste en un buscador de imágenes que utiliza la API de Unsplash para buscar y mostrar imágenes relacionadas con un término de búsqueda proporcionado por el usuario.

Descripción del Proyecto
------------------------------------------------------------
El objetivo de este proyecto es proporcionar a los usuarios una herramienta sencilla para buscar imágenes en la plataforma Unsplash. Al ingresar un término de búsqueda en el formulario y hacer clic en el botón "Buscar Imágenes", la aplicación realiza una solicitud a la API de Unsplash y muestra los resultados obtenidos en la interfaz de usuario.

Detalles Técnicos
------------------------------
Lenguajes y Tecnologías Utilizadas
HTML: Se utiliza para definir la estructura de la página web.
CSS (Tailwind CSS): Se utiliza para estilizar los elementos de la interfaz de usuario y proporcionar una apariencia visual atractiva y moderna.
JavaScript: Se utiliza para interactuar con la API de Unsplash, manejar eventos del formulario y actualizar dinámicamente la interfaz de usuario con los resultados de búsqueda.
Principales Componentes y Funcionalidades
Constantes:

accessKey: La clave de acceso necesaria para autenticar las solicitudes a la API de Unsplash.
baseUrl: La URL base de la API de Unsplash para realizar solicitudes de búsqueda de imágenes.
currentPage: La página actual de resultados de búsqueda.
perPage: El número de imágenes por página.
Eventos y Funciones:

Evento de Envío del Formulario: Se escucha el evento de envío del formulario y se previene el comportamiento por defecto para realizar la búsqueda de imágenes.
Función buscarImagenes(termino): Esta función realiza una solicitud a la API de Unsplash con el término de búsqueda proporcionado por el usuario y muestra los resultados obtenidos.
Función mostrarImagenes(imagenes): Esta función toma los datos de las imágenes obtenidas de la API y los muestra en la interfaz de usuario.
Función mostrarPaginacion(totalPaginas): Esta función muestra la paginación para navegar entre las diferentes páginas de resultados.
Evento window.onload: Se utiliza para cargar imágenes por defecto al cargar la página, en este caso, imágenes relacionadas con el término de búsqueda "nature".
Motivación y Decisiones de Diseño
API de Unsplash: Se eligió utilizar la API de Unsplash debido a su amplia colección de imágenes de alta calidad y su facilidad de uso.
Tailwind CSS: Se utilizó Tailwind CSS como framework de estilos para facilitar el desarrollo y proporcionar una apariencia visual moderna y atractiva a la aplicación.
Vanilla JavaScript: Se optó por utilizar JavaScript puro en lugar de un framework o biblioteca para mantener la simplicidad del proyecto y mejorar la comprensión del código.
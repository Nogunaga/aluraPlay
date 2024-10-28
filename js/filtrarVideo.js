import { conexionAPI } from "./conexionAPI";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();
    const buscarDatos = document.querySelector("[data-buscar]").value;
    const busqueda = await conexionAPI.buscarVideos(buscarDatos);
    const lista = document.querySelector("[data-lista]");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    if (busqueda.length === 0) {
        lista.innerHTML = `<h2 class='mensaje__titulo'>No se encontraron los elementos de ${buscarDatos}</h2>`;
    }
}

const boton = document.querySelector("[data-boton-buscar]");
boton.addEventListener("click", evento => filtrarVideo(evento));

const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
        filtrarVideo(e);
    }
});

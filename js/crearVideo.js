import { conexionApi } from "../js/conexionAPI";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(e) {
  e.preventDefault();
  const titulo = document.querySelector(" [data-titulo]").value;
  const url = document.querySelector(" [data-url]").value;
  const imagen = document.querySelector(" [data-imagen").value;

  const descripcion = Math.floor(Math.random * 10).toString();

  try {
    await conexionApi.enviarVideo(titulo, descripcion, url, imagen);
    window.location.href = "../pages/envio-concluido.html";
  } 

  catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", (e) => crearVideo(e));

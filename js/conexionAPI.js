async function listarVideos() {
  const conexion = await fetch("http://localhost:3001/videos");
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
  const conexion = await fetch("http://localhost:3001/videos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
          titulo: titulo,
          descripcion: `${descripcion} mil visualizaciones `,
          url: url,
          imagen: imagen
      })
  });
  const conexionConvertida = await conexion.json();
  if (!conexion.ok) {
      throw new Error("Error al enviar el video");
  }
  return conexionConvertida;
}

async function buscarVideos(palabraClave) {
  const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

export const conexionAPI = { listarVideos, enviarVideo, buscarVideos };

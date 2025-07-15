const lugares = {
  biblioteca: {
    titulo: "Biblioteca",
    descripcion: "Colección extensa de libros, revistas y salas de estudio para trabajos individuales o en grupo."
  },
  cafeteria: {
    titulo: "Cafetería",
    descripcion: "Espacio para disfrutar de comidas y bebidas a precios accesibles para toda la comunidad universitaria."
  },
  cidete: {
    titulo: "CIDETE",
    descripcion: "Centro de Innovación y Desarrollo Tecnológico para proyectos de investigación y eventos académicos."
  },
  pinacoteca: {
    titulo: "Pinacoteca",
    descripcion: "Sala para exposiciones de arte local e internacional, fomentando la cultura universitaria."
  },
  salones100: {
    titulo: "Salones 100",
    descripcion: "Aulas del bloque 100, destinadas a clases regulares."
  },
  salones200: {
    titulo: "Salones 200",
    descripcion: "Aulas del bloque 200, destinadas a clases regulares."
  },
  salones300: {
    titulo: "Salones 300",
    descripcion: "Aulas del bloque 300, destinadas a clases regulares."
  },
  salones400: {
    titulo: "Salones 400",
    descripcion: "Aulas 400, destinadas a clases regulares."
  },
  salones500: {
    titulo: "Salones 500",
    descripcion: "Aulas 500, destinadas a clases regulares."
  },
  laboratorios: {
    titulo: "Laboratorios",
    descripcion: "Laboratorios, destinadas a invetigaciones."
  }
};

function mostrarInfo(lugar) {
  const infoDiv = document.getElementById("infoLugar");
  const videoDiv = document.getElementById("videoLugar");
  const video = document.getElementById("videoDemo");

  if (lugares[lugar]) {
    infoDiv.innerHTML = `<h2>${lugares[lugar].titulo}</h2>
                         <p>${lugares[lugar].descripcion}</p>`;

    // Cambiar la fuente del video
    video.querySelector("source").src = `videos/${lugar}.mp4`;
    video.load();
    videoDiv.style.display = "block";
    video.play();
  } else {
    infoDiv.innerHTML = "<p>No hay información disponible para este lugar.</p>";
    videoDiv.style.display = "none";
    video.pause();
  }
}

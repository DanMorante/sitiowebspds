// 1. Nuestra "Base de Datos" de partidos
const datosFixture = {
  1: {
    dia: "15/08",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "5 - 0", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "3 - 3", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "2 - 2", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Don Satur", escL: "spds.png", res: "1 - 5", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "LPF", escL: "escudolpf.png", res: "0 - 0", vis: "Barsenal", escV: "escudobarsenal.png" }
    ]
  },
  2: {
    dia: "22/08",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "2 - 2", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "0 - 5", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "2 - 3", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "1 - 0", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "Don Satur", escL: "spds.png", res: "2 - 1", vis: "LPF", escV: "escudolpf.png" }
    ]
  },
  3: {
    dia: "29/08",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "1 - 1", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "1 - 8", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "0 - 5", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "1 - 0", vis: "LPF", escV: "escudolpf.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "4 - 2", vis: "Don Satur", escV: "spds.png" }
    ]
  },
  4: {
    dia: "05/09",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "0 - 1", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "0 - 1", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "3 - 1", vis: "LPF", escV: "escudolpf.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "1 - 2", vis: "Don Satur", escV: "spds.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "0 - 3", vis: "Guaraní", escV: "escudoguarani.png" }
    ]
  },
  5: {
    dia: "12/09",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "0 - 3", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "1 - 0", vis: "LPF", escV: "escudolpf.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "8 - 0", vis: "Don Satur", escV: "spds.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "1 - 4", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "0 - 1", vis: "Mandingo", escV: "escudomandingo.png" }
    ]
  },
  6: {
    dia: "19/09",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "0 - 3", vis: "LPF", escV: "escudolpf.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "3 - 2", vis: "Don Satur", escV: "spds.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "2 - 2", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "3 - 1", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "3 - 0", vis: "Barrio Jardín", escV: "escudobarriojardin.png" }
    ]
  },
  7: {
    dia: "26/09",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "1 - 0", vis: "Don Satur", escV: "spds.png" },
      { local: "LPF", escL: "escudolpf.png", res: "0 - 1", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "1 - 1", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "5 - 2", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "2 - 1", vis: "Motorpsico", escV: "escudomotorpsico.png" }
    ]
  },
  8: {
    dia: "03/10",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" }
    ]
  },
  9: {
    dia: "10/10",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" }
    ]
  },
  10: {
    dia: "17/10",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Mandingo", escL: "escudomandingo.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Barsenal", escV: "escudobarsenal.png" }
    ]
  },
  11: {
    dia: "24/10",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Mandingo", escL: "escudomandingo.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "vs", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "LPF", escV: "escudolpf.png" }
    ]
  },
  12: {
    dia: "31/10",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "vs", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "vs", vis: "LPF", escV: "escudolpf.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "vs", vis: "Don Satur", escV: "spds.png" }
    ]
  },
  13: {
    dia: "07/11",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "vs", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "vs", vis: "LPF", escV: "escudolpf.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "vs", vis: "Don Satur", escV: "spds.png" },
      { local: "20 de Mayo", escL: "escudo20demayo.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" }
    ]
  },
  14: {
    dia: "14/11",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Barsenal", escV: "escudobarsenal.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "vs", vis: "LPF", escV: "escudolpf.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "vs", vis: "Don Satur", escV: "spds.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Barrio Jardín", escL: "escudobarriojardin.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" }
    ]
  },
  15: {
    dia: "21/11",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "LPF", escV: "escudolpf.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "Don Satur", escV: "spds.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "Motorpsico", escL: "escudomotorpsico.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" }
    ]
  },
  16: {
    dia: "28/11",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Don Satur", escV: "spds.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Napuro", escL: "escudonapuro.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" }
    ]
  },
  17: {
    dia: "05/12",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Guaraní", escV: "escudoguarani.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "La Loma", escL: "escudolaloma.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" }
    ]
  },
  18: {
    dia: "12/12",
    partidos: [
      { local: "Sporting", escL: "escudosportingds.png", res: "vs", vis: "Mandingo", escV: "escudomandingo.png" },
      { local: "Guaraní", escL: "escudoguarani.png", res: "vs", vis: "Barrio Jardín", escV: "escudobarriojardin.png" },
      { local: "Don Satur", escL: "spds.png", res: "vs", vis: "Motorpsico", escV: "escudomotorpsico.png" },
      { local: "LPF", escL: "escudolpf.png", res: "vs", vis: "Napuro", escV: "escudonapuro.png" },
      { local: "Barsenal", escL: "escudobarsenal.png", res: "vs", vis: "La Loma", escV: "escudolaloma.png" }
    ]
  }
};


// 2. Variables de control
const totalFechas = Object.keys(datosFixture).length; // Cuenta cuántas fechas tenés guardadas
let fechaActual = 1;

// Lógica automática para detectar la última fecha jugada
for (let i = totalFechas; i >= 1; i--) {
  // Chequeamos si en esta fecha hay algún partido que NO diga "vs"
  const tieneResultado = datosFixture[i].partidos.some(p => p.res !== "vs");
  
  if (tieneResultado) {
    fechaActual = i; // Encontramos la última fecha con resultados (actualmente la 7)
    break; // Cortamos la búsqueda
  }
}

// 3. Función principal para dibujar la fecha en pantalla
function cargarFecha(numero) {
  const datos = datosFixture[numero];
  
  // Cambiamos el título
  document.getElementById("titulo-fecha").textContent = "FECHA " + numero;

  // Empezamos a armar el HTML con el separador de día
  let htmlPartidos = `<div class="dia-partido">${datos.dia}</div>`;

  // Recorremos los partidos y los dibujamos
  datos.partidos.forEach(p => {
    // Si el resultado es "vs", le aplicamos la clase gris. Si tiene números, va la azul.
    const claseRes = p.res === "vs" ? "resultado vs" : "resultado";

    htmlPartidos += `
      <div class="fila-partido">
        <div class="equipo local">
          <span class="nombre">${p.local}</span>
          <img src="imagenes/tabla/${p.escL}" alt="${p.local}">
        </div>
        <div class="${claseRes}">${p.res}</div>
        <div class="equipo visitante">
          <img src="imagenes/tabla/${p.escV}" alt="${p.vis}">
          <span class="nombre">${p.vis}</span>
        </div>
      </div>
    `;
  });

  // Inyectamos todo el HTML armado en el contenedor vacío
  document.getElementById("contenedor-partidos").innerHTML = htmlPartidos;
}

// 4. Configurar los botones (Flechas)
document.getElementById("btn-ant").addEventListener("click", () => {
  if (fechaActual > 1) { // Evita que baje a la fecha 0
    fechaActual--;
    cargarFecha(fechaActual);
  }
});

document.getElementById("btn-sig").addEventListener("click", () => {
  if (fechaActual < totalFechas) { // Evita que pase de tu última fecha guardada
    fechaActual++;
    cargarFecha(fechaActual);
  }
});

// 5. Cargar la fecha 1 automáticamente al abrir la página
document.addEventListener("DOMContentLoaded", () => {
  cargarFecha(fechaActual);
});
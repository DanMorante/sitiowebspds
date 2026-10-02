document.addEventListener("DOMContentLoaded", () => {
  // 1. Leemos la URL para saber qué jugador clickeó el usuario (ej: perfil.html?id=glellel)
  const parametros = new URLSearchParams(window.location.search);
  const idJugador = parametros.get("id");

  // 2. Buscamos ese ID en nuestra base de datos (jugadores.js)
  const jugador = baseJugadores[idJugador];

  // 3. Si el jugador existe, rellenamos el HTML
if (jugador) {
    // Foto y título izquierdo
    document.getElementById("perfil-foto").src = jugador.foto;
    document.getElementById("perfil-nombre").textContent = jugador.nombre;
    document.getElementById("perfil-dorsal").textContent = jugador.dorsal;
    
    // Las 6 primeras filas
    document.getElementById("perfil-nombre-completo").textContent = jugador.nombre;
    document.getElementById("perfil-posicion").textContent = jugador.posicion;
    document.getElementById("perfil-edad").textContent = jugador.edad;
    document.getElementById("perfil-localidad").textContent = jugador.localidad || "-";
    document.getElementById("perfil-trayectoria").textContent = jugador.trayectoria;
    
    // Configurar Instagram
    const enlaceIg = document.getElementById("perfil-ig");
    if (jugador.instagram) {
      enlaceIg.textContent = "@" + jugador.instagram;
      enlaceIg.href = "https://instagram.com/" + jugador.instagram;
    } else {
      enlaceIg.textContent = "-";
      enlaceIg.removeAttribute("href");
    }

    // Fila 7: Rellenamos las 5 estadísticas
    document.getElementById("stat-pj").textContent = jugador.stats.pj;
    document.getElementById("stat-goles").textContent = jugador.stats.goles;
    document.getElementById("stat-asistencias").textContent = jugador.stats.asistencias;
    document.getElementById("stat-ta").textContent = jugador.stats.ta;
    document.getElementById("stat-tr").textContent = jugador.stats.tr;
  } else {
    // Si alguien escribe un ID que no existe, mostramos un error
    document.getElementById("contenedor-perfil").innerHTML = `
      <div class="tarjeta-datos"><h2>Jugador no encontrado</h2><a href="plantel.html">Volver al plantel</a></div>
    `;
  }
});
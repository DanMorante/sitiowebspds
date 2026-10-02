document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("cuerpo-tabla-stats");
  const botonesFiltro = document.querySelectorAll(".btn-filtro");
  const thStats = document.querySelectorAll("th.col-stat");

  // 1. Transformar el objeto de jugadores en un Array y filtrar a los que tienen estadísticas
  let jugadoresArray = Object.entries(baseJugadores)
    .filter(([id, data]) => data.stats) // Descarta automáticamente al cuerpo técnico
    .map(([id, data]) => ({ id, ...data }));

  // 2. Función principal para dibujar la tabla
  function renderizarTabla(filtroActual) {
    // Ordenar a los jugadores de MAYOR a MENOR según el botón que se tocó
    jugadoresArray.sort((a, b) => b.stats[filtroActual] - a.stats[filtroActual]);

    // Generar el código HTML para cada jugador
    tbody.innerHTML = jugadoresArray.map(jugador => {
      
      // Lógica para el nombre (Nombre completo para PC, Inicial para Móvil)
      const partesNombre = jugador.nombre.split(" ");
      const nombreReal = partesNombre[0];
      const inicial = nombreReal.charAt(0) + "."; 
      const apellido = partesNombre.slice(1).join(" "); // Toma todo lo demás como apellido
      
      // Lógica para acortar la posición (Arquero -> ARQ, Defensor -> DEF)
      const posCorta = jugador.posicion.substring(0, 3).toUpperCase();

      return `
        <tr>
          <td class="col-num">${jugador.dorsal}</td>
          <td class="col-pos">${posCorta}</td>
          <td class="col-jugador-stat">
            <a href="perfil.html?id=${jugador.id}" class="enlace-perfil">
              <div class="foto-stat"><img src="${jugador.foto}" alt="${jugador.nombre}"></div>
              <div>
                <span class="nombre-pc">${nombreReal}</span>
                <span class="nombre-movil">${inicial}</span> 
                &nbsp;<strong>${apellido}</strong>
              </div>
            </a>
          </td>
          <!-- La clase "activa" solo se le pone a la estadística que estamos mirando -->
          <td class="col-stat ${filtroActual === 'goles' ? 'activa' : 'oculta'}" data-tipo="goles">${jugador.stats.goles}</td>
          <td class="col-stat ${filtroActual === 'asistencias' ? 'activa' : 'oculta'}" data-tipo="asistencias">${jugador.stats.asistencias}</td>
          <td class="col-stat ${filtroActual === 'pj' ? 'activa' : 'oculta'}" data-tipo="pj">${jugador.stats.pj}</td>
          <td class="col-stat ${filtroActual === 'ta' ? 'activa' : 'oculta'}" data-tipo="ta">${jugador.stats.ta}</td>
          <td class="col-stat ${filtroActual === 'tr' ? 'activa' : 'oculta'}" data-tipo="tr">${jugador.stats.tr}</td>
        </tr>
      `;
    }).join(""); 
  }

  // 3. Inicializar la tabla mostrando los Goles por defecto
  renderizarTabla("goles");

  // 4. Lógica de los botones superiores
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const filtro = e.target.getAttribute("data-filtro");

      // Pintar de azul el botón que se tocó
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      e.target.classList.add("activo");

      // Cambiar los títulos de las columnas (th) para mostrar solo la activa
      thStats.forEach(th => {
        if (th.getAttribute("data-tipo") === filtro) {
          th.classList.replace("oculta", "activa");
        } else {
          th.classList.replace("activa", "oculta");
        }
      });

      // Volver a dibujar la tabla ordenada por el nuevo filtro
      renderizarTabla(filtro);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const btnToggle = document.getElementById("btn-filtro-movil");
    const menuStats = document.getElementById("menu-stats-movil");
    const textoActual = document.getElementById("texto-filtro-actual");
    const itemsDropdown = document.querySelectorAll(".dropdown-item");

    if (btnToggle && menuStats) {
        // Abrir/Cerrar el menú al tocar el texto o la flecha
        btnToggle.addEventListener("click", () => {
            menuStats.classList.toggle("abierto");
        });

        // Acción al tocar una opción del mini menú
        itemsDropdown.forEach(item => {
            item.addEventListener("click", () => {
                // 1. Cambiar el texto superior por la opción elegida
                textoActual.textContent = item.textContent;
                
                // 2. Cerrar el menú
                menuStats.classList.remove("abierto");
                
                // 3. (OPCIONAL) Disparar el click en el botón de PC oculto para que tu filtro de tabla siga funcionando sin reprogramar todo
                const filtroElegido = item.getAttribute("data-filtro");
                const botonPcEquivalente = document.querySelector(`.filtros-pc .btn-filtro[data-filtro="${filtroElegido}"]`);
                if(botonPcEquivalente) botonPcEquivalente.click();
            });
        });
    }
});
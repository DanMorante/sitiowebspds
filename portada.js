document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // EL GRAN PANEL DE CONTROL: ACTUALIZAR DATOS AQUÍ
  // ==========================================
  const datosCarrusel = {
    proximo: {
      fondo: "imagenes/fondoportada.png",
      fechaNum: "FECHA 8",
      dia: "03/10",
      hora: "14:50HS.",
      escudoRival: "imagenes/tabla/escudoguarani.png"
    },
    ultimo: {
      fondo: "imagenes/fondoultimopartido.png", 
      escudoRival: "imagenes/tabla/spds.png",
      resultado: "1 - 0",
    },
    noticia: {
      fondo: "imagenes/fondonoticia.jpg", // Foto panorámica de fondo
      titulo: "EL CLASICO<br>ES NUESTRO", // Podés usar <br> para saltos de línea
      subtitulo: 'Tras un partido parejo, "El Hombre de los momentos importantes" lo volvió a hacer.',
      imagenDerecha: "imagenes/noticias/tepgoleador.png", // Una foto cuadrada o vertical para ilustrar
      enlace: "noticias.html" // A dónde lleva el botón
    }
  };
  // ==========================================

// 1. INYECTAR DATOS EN EL HTML
  const slideProximo = document.getElementById("js-slide-proximo");
  const slideUltimo = document.getElementById("js-slide-ultimo");
  const slideNoticia = document.getElementById("js-slide-noticia");

  // Inyectar fondos
  if (slideProximo) slideProximo.style.backgroundImage = `url('${datosCarrusel.proximo.fondo}')`;
  if (slideUltimo) slideUltimo.style.backgroundImage = `url('${datosCarrusel.ultimo.fondo}')`;
  if (slideNoticia) slideNoticia.style.backgroundImage = `url('${datosCarrusel.noticia.fondo}')`;

  // ------------------------------------------
  // INYECTAR DATOS: PRÓXIMO PARTIDO (SLIDE 1)
  // ------------------------------------------
  const elFechaNum = document.getElementById("js-fecha-num");
  const elDia = document.getElementById("js-dia");
  const elHora = document.getElementById("js-hora");
  const elEscudoRival = document.getElementById("js-escudo-rival");

  // Solo chequea los elementos de la portada 1
  if (elFechaNum && elDia && elHora && elEscudoRival) {
    elFechaNum.textContent = datosCarrusel.proximo.fechaNum;
    elDia.textContent = datosCarrusel.proximo.dia;
    elHora.textContent = datosCarrusel.proximo.hora;
    elEscudoRival.src = datosCarrusel.proximo.escudoRival;
  }

  // ------------------------------------------
  // INYECTAR DATOS: ÚLTIMO PARTIDO (SLIDE 2)
  // ------------------------------------------
  const elEstadoPartido = document.getElementById("js-estado-partido");
  const elEscudoRivalUltimo = document.getElementById("js-escudo-rival-ultimo");
  const elResultadoUltimo = document.getElementById("js-resultado-ultimo");

  if (elEstadoPartido && elEscudoRivalUltimo && elResultadoUltimo) {
    const resultado = datosCarrusel.ultimo.resultado; // Ej: "1 - 0"
    
    // Inyectamos texto e imagen en la derecha
    elResultadoUltimo.textContent = resultado;
    elEscudoRivalUltimo.src = datosCarrusel.ultimo.escudoRival;

    // Lógica matemática para decidir si es Victoria, Empate o Derrota
    const partes = resultado.split("-"); 
    
    if (partes.length === 2) {
      const golesLocal = parseInt(partes[0].trim());
      const golesRival = parseInt(partes[1].trim());

      if (golesLocal > golesRival) {
        elEstadoPartido.innerHTML = "GANAMOS";
      } else if (golesLocal === golesRival) {
        elEstadoPartido.innerHTML = "EMPATE";
      } else {
        elEstadoPartido.innerHTML = "DERROTA";
      }
    }
  }
  // ------------------------------------------
  // INYECTAR DATOS: NOTICIA (SLIDE 3)
  // ------------------------------------------
  const elNoticiaTitulo = document.getElementById("js-noticia-titulo");
  const elNoticiaSubtitulo = document.getElementById("js-noticia-subtitulo");
  const elNoticiaImagen = document.getElementById("js-noticia-imagen");
  const elNoticiaLink = document.getElementById("js-noticia-link");

  if (elNoticiaTitulo && elNoticiaSubtitulo && elNoticiaImagen && elNoticiaLink) {
    elNoticiaTitulo.innerHTML = datosCarrusel.noticia.titulo; 
    elNoticiaSubtitulo.textContent = datosCarrusel.noticia.subtitulo;
    elNoticiaLink.href = datosCarrusel.noticia.enlace;
    
    // Si no cargás ninguna imagen en el panel, ocultamos la etiqueta img para que no quede un recuadro roto
    if (datosCarrusel.noticia.imagenDerecha === "") {
      elNoticiaImagen.style.display = "none";
    } else {
      elNoticiaImagen.src = datosCarrusel.noticia.imagenDerecha;
      elNoticiaImagen.style.display = "block";
    }
  }


  // 2. LÓGICA DE MOVIMIENTO DEL CARRUSEL
  const slides = document.querySelectorAll(".slide");
  const btnNext = document.getElementById("js-carrusel-next");
  const btnPrev = document.getElementById("js-carrusel-prev");
  let slideActual = 0;
  let temporizador;

  // Si existen slides, activamos la maquinaria
  if (slides.length > 0) {
    
    function mostrarSlide(indice) {
      // Le saca la clase "activo" a todos
      slides.forEach(slide => slide.classList.remove("activo"));
      
      // Matemática para que vuelva a cero si llega al final, o vaya al final si retrocede desde cero
      slideActual = (indice + slides.length) % slides.length;
      
      // Le da la clase "activo" al nuevo slide (Esto dispara las animaciones CSS de nuevo)
      slides[slideActual].classList.add("activo");
    }

    function avanzarSlide() { mostrarSlide(slideActual + 1); }
    function retrocederSlide() { mostrarSlide(slideActual - 1); }

    // Cambia automáticamente cada 6 segundos (6000 milisegundos)
    function iniciarRotacion() {
      temporizador = setInterval(avanzarSlide, 6000);
    }

    // Reinicia el reloj si el usuario toca un botón
    function resetearRotacion() {
      clearInterval(temporizador);
      iniciarRotacion();
    }

    // Eventos de los botones
    if(btnNext && btnPrev) {
      btnNext.addEventListener("click", () => { avanzarSlide(); resetearRotacion(); });
      btnPrev.addEventListener("click", () => { retrocederSlide(); resetearRotacion(); });
    }

    // Arrancamos el motor
    iniciarRotacion();
  }
});
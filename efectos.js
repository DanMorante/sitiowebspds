const cabecera = document.querySelector(".cabecera");
const escudoOriginal = document.querySelector(".marca img");
const barraFija = document.querySelector("#barra-fija");

if (cabecera && escudoOriginal && barraFija) {
  // Copia la misma imagen del encabezado
  const copiaEscudo = escudoOriginal.cloneNode(true);
  copiaEscudo.removeAttribute("id");
  copiaEscudo.alt = "";

  barraFija.querySelector("a").appendChild(copiaEscudo);

  // Detecta cuándo el encabezado sale por arriba de la pantalla
  const observador = new IntersectionObserver(([entrada]) => {
    const mostrar =
      !entrada.isIntersecting &&
      entrada.boundingClientRect.bottom <= 0;

    barraFija.classList.toggle("visible", mostrar);
    barraFija.inert = !mostrar;
  });

  observador.observe(cabecera);

}
document.addEventListener("DOMContentLoaded", () => {
  const btnMenuMovil = document.getElementById("btn-menu-movil");
  const btnCerrarMenu = document.getElementById("btn-cerrar-menu");
  const menuEnlaces = document.getElementById("menu-enlaces");

  if (btnMenuMovil && btnCerrarMenu && menuEnlaces) {
    // Abrir menú lateral
    btnMenuMovil.addEventListener("click", (e) => {
      e.preventDefault();
      menuEnlaces.classList.add("abierto");
    });

    // Cerrar menú lateral
    btnCerrarMenu.addEventListener("click", (e) => {
      e.preventDefault();
      menuEnlaces.classList.remove("abierto");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const itemsDesplegables = document.querySelectorAll(".item-desplegable");

  itemsDesplegables.forEach(item => {
    // Buscamos específicamente el BOTÓN para disparar el evento
    const botonMenu = item.querySelector("button.enlace-principal");
    
    if (botonMenu) {
      botonMenu.addEventListener("click", () => {
        // Ejecutamos esto solo si estamos en vista de celular
        if (window.innerWidth <= 850) {
          
          // Verificamos si el que tocamos ya estaba abierto
          const estabaAbierto = item.classList.contains("activo-movil");

          // 1. Cerramos absolutamente todos los menús
          itemsDesplegables.forEach(otroItem => {
            otroItem.classList.remove("activo-movil");
          });

          // 2. Si el que tocamos NO estaba abierto, lo abrimos. 
          // (Si ya estaba abierto, queda cerrado gracias al paso 1).
          if (!estabaAbierto) {
            item.classList.add("activo-movil");
          }
        }
      });
    }
  });
});
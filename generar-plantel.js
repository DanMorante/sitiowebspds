document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-jugadores");
    
    // Verificamos que exista el contenedor y la base de datos
    if (!contenedor || typeof baseJugadores === 'undefined') return;

    let htmlPlantel = "";

    // Recorremos la base de datos de jugadores
    for (const [idJugador, datos] of Object.entries(baseJugadores)) {
        
        // Separamos el nombre del apellido (asumiendo formato "Nombre Apellido")
        const partesNombre = datos.nombre.split(" ");
        const nombre = partesNombre[0];
        const apellido = partesNombre.length > 1 ? partesNombre.slice(1).join(" ") : "";

        // Creamos la estructura HTML respetando el diseño Responsive
        htmlPlantel += `
        <a href="perfil.html?id=${idJugador}" class="tarjeta-jugador" style="text-decoration: none; color: inherit;">
            <span class="etiqueta-top">${datos.posicion}</span>
            <div class="foto-jugador">
                <img src="${datos.foto}" alt="${datos.nombre}">
            </div>
            <div class="info-jugador">
                <span class="nombre">${nombre}</span>
                <strong class="apellido">${apellido}</strong>
            </div>
            <div class="letra-pos">${datos.dorsal}</div> 
        </a>
        `;
    }

    // Insertamos todo el HTML generado en la página
    contenedor.innerHTML = htmlPlantel;
});
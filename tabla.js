function ordenarTablaPosiciones() {
  // 1. Seleccionamos el cuerpo de la tabla y todas sus filas
  const tbody = document.querySelector('.tabla-posiciones tbody');
  const filas = Array.from(tbody.querySelectorAll('tr'));

  // 2. Aplicamos el método sort()
  filas.sort((filaA, filaB) => {
    // Extraemos el texto de las celdas y lo convertimos a número entero
    const ptsA = parseInt(filaA.querySelector('.col-pts').textContent) || 0;
    const ptsB = parseInt(filaB.querySelector('.col-pts').textContent) || 0;
    
    const difA = parseInt(filaA.querySelector('.col-dif').textContent) || 0;
    const difB = parseInt(filaB.querySelector('.col-dif').textContent) || 0;

    // LÓGICA DE COMPARACIÓN:
    if (ptsB !== ptsA) {
      return ptsB - ptsA; 
    } else {
      return difB - difA;
    }
  });

  // 3. Volvemos a inyectar las filas en el HTML ya ordenadas
  filas.forEach((fila, index) => {
    tbody.appendChild(fila); 
    
    const celdaNumero = fila.querySelector('.col-num');
    if (celdaNumero) {
      celdaNumero.textContent = index + 1;
    }
  });
}

// Único evento necesario: Ordenar automáticamente cuando la página carga
document.addEventListener('DOMContentLoaded', ordenarTablaPosiciones);
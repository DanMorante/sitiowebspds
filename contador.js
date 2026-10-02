// 1. Definí la fecha y hora exacta del partido (Mes en inglés, Día, Año, Hora)
const fechaPartido = new Date("Oct 03, 2026 14:50:00").getTime();

// 2. Ejecutar la función cada 1000 milisegundos (1 segundo)
const intervalo = setInterval(function() {
  
  // Obtener la fecha y hora actual
  const ahora = new Date().getTime();
  
  // Calcular la diferencia entre la fecha del partido y hoy
  const distancia = fechaPartido - ahora;
  
  // Cálculos matemáticos para convertir milisegundos en días, horas, min y seg
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
  // Inyectar los resultados en el HTML (agregando un "0" si el número es menor a 10)
  document.getElementById("dias").textContent = dias < 10 ? "0" + dias : dias;
  document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos").textContent = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos").textContent = segundos < 10 ? "0" + segundos : segundos;
  
  // 3. ¿Qué pasa cuando llega la hora del partido?
  if (distancia < 0) {
    clearInterval(intervalo); // Frena el reloj
    document.getElementById("cuenta-regresiva").innerHTML = "<h3 style='color: var(--acento);'>¡EL PARTIDO ESTÁ EN JUEGO!</h3>";
  }
  
}, 1000);
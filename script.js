document.getElementById("reserva").addEventListener("click", function() {
  toggle("reserva");
});

document.getElementById("salud").addEventListener("click", function() {
  toggle("salud");
});
document.getElementById("social").addEventListener("click", function() {
  toggle("social");
});
document.getElementById("tienda").addEventListener("click", function() {
  toggle("tienda");
});
document.getElementById("ayuda").addEventListener("click", function() {
    toggle("ayuda");
}); 
let toggle = seccion => {
  let secciones = document.getElementsByClassName("secciones");
  Array.from(secciones).forEach(element => {
    element.classList.remove("activo");
  });
  document.getElementById(seccion).classList.add("activo");
};

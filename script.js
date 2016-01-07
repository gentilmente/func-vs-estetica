/* botones-js-CSS.js */
var guerra = document.getElementById("guerra");

function pacificar(){
  //guerra.classList.remove('fadeout', 'fadein');
	guerra.innerHTML = "Paz";
}

function mejorarPacificacion () {
  //animación por ejemplo fade out fade in, etc
  guerra.classList.add('fadeout');

  //una manera de usar la func:
  setTimeout(function() {
    pacificar();
  }, 1000);
  
  //otra manera sólo si no usa (argumentos):
  setTimeout(fadein, 1000);
}

function fadein() {
  guerra.classList.add('fadein');
}


function descontaminar() {
  console.log("cambiar de manera funcional el elemento -descontaminar-");
}

function mejorarDescontaminación(){
  console.log("cambiar de manera estética el elemento -descontaminar-");
}

function equilibrarEconomia () {
  console.log("cambiar de manera funcional el elemento -pobreza-");  
}

function mejorarEquilibrio () {
  console.log("cambiar de manera estética el elemento -pobreza-");  
}

function ejecutarFunciones () {
  pacificar();
  descontaminar();
  equilibrarEconomia();
}
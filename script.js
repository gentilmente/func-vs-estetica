/* botones-js-CSS.js */
var guerra = document.getElementById("guerra");

function pacificar(){
	guerra.innerHTML = "Paz";
}

function mejorarPacificacion () {
	//animación por ejemplo fade out fade in, etc
	guerra.classList.add('fadeout');
	pacificar();

}
function descontaminar() {

}

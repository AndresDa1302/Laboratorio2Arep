var IMAGES = ['diomedez.jpg','mbappe2.jpeg','messi.jpg'];
var rotacion = 0;

function actualizar(){
    var image = document.getElementById('imagen');
    image.src = IMAGES[rotacion];
}

function cambiarImagen(){
    rotacion += 1;
    if(rotacion>=3){
		rotacion=0;
	}
    actualizar();
}
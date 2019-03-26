
// Todo el código de aquí abajo permite cambiar entre imágenes
// con un click
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/segundo.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Con estas líneas se dará un mensaje de bienvenida personalizado
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
   var miNombre = prompt('Por favor, ingresa tu nombre.');
   localStorage.setItem('nombre', miNombre);
   miTitulo.textContent = 'Mozilla es pulento, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
   estableceNombreUsuario();
}
else {
   var nombreAlmacenado = localStorage.getItem('nombre');
   miTitulo.textContent = 'Mozilla es pulento, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
   estableceNombreUsuario();
}


// Este código cambia el título por otro texto
// // var miTitulo = document.querySelector('h1');
// miTitulo.innerHTML = 'Probando el Javascript';


// Multiplicación de variables.
// function multiplica(num1,num2) {
//    var resultado = num1 * num2;
//    return resultado;
//  }

// Función que hace aparecer el mensaje entre comillas.
//  document.querySelector('html').onclick = function() {
//    alert('Ouch! Deja de pincharme!');
// }
// El código hecho de onclick, es lo mismo que escribir
// var miHTML = document.querySelector('html');
// miHTML.onclick = function(){};
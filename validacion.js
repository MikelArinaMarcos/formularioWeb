var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var confemail = document.getElementById('confemail');
var dni = document.getElementById('dni');
var movil = document.getElementById('movil');

function validar(){
    if(nombre.value == null || nombre.value == ''){
        alert("Escribe el nombre");
    }
    if(apellido.value == null || nombre.value == ''){
        alert("Escribe el apellido");
    }
    if(email.value == null || nombre.value == ''){
        alert("Escribe el email");
    }
    if(confemail.value == null || != email.value){
        alert("El email es diferente");
    }
    if(dni.value == null || nombre.value == ''){
        alert("Escribe el dni");
    }
    if(movil.value == null || nombre.value == ''){
        alert("Escribe el movil");
    }
    else{
        alert("Todo correcto.");
    }
}
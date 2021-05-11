function validar(){
    var nombre, apellido, email, confemail, dni, movil, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    confemail = document.getElementById("confemail").value;
    dni = document.getElementById("dni").value;
    movil = document.getElementById("movil").value;

    if(nombre == ""){
        alert("Introduzca el nombre");
        return false;
    }
}
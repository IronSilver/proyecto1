var cuenta = 0;

function leeTexto(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;

    document.getElementById("respuesta").innerHTML= nombre + ":<br>" + mensaje + "<br>";

    cuenta = cuenta + 1;
    if(cuenta >= 1){

        respuesta = nombre + ":<br>" + mensaje + "<br>";
    }
    
}


var cuenta = 0;
var comentarios = [];
var guardo

function leeTexto(){
    var respuesta = document.getElementById("respuesta");
    var nombre = document.getElementById("nombre");
    var mensaje = document.getElementById("mensaje");
 // comentarios.push(nombre + ":<br>" + mensaje + "<br><br>"); 
 // document.getElementById("respuesta").innerHTML = comentarios; 

    comentarios.unshift(nombre.value + ":<br>" + mensaje.value + "<br><br>") ; 

    
    respuesta.innerHTML = comentarios;

    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
    
    
}

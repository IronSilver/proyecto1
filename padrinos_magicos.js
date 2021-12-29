let cuenta = 0;



function timmy(){
    var Wanda = document.getElementById("Wanda");
    var Ada = document.getElementById("El ada de los dientes");
    var Timmy = document.getElementById("Timmy");
    Timmy.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    Wanda.onclick = 0;
    Ada.onclick = 0;
}


function respuesta(){
    var Timmy = document.getElementById("Timmy");
    var Ada = document.getElementById("El ada de los dientes");
    var Wanda = document.getElementById("Wanda");
    Wanda.style.backgroundColor = "rgba(4, 207, 4, 0.747)";
    Timmy.onclick = 0;
    Ada.onclick = 0;

    cuenta = cuenta + 10;
}

function Ada(){
    var Wanda = document.getElementById("Wanda");
    var Ada = document.getElementById("El ada de los dientes");
    var Timmy = document.getElementById("Timmy");
    Ada.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    Wanda.onclick = 0;
    Timmy.onclick = 0;
}


function r1_2(){
    var R1 = document.getElementById("R1_2");
    var R2 = document.getElementById("R2_2");
    var R3 = document.getElementById("R3_2");
    R1.style.backgroundColor = "rgba(4, 207, 4, 0.747)";
    R2.onclick = 0;
    R3.onclick = 0;

    cuenta = cuenta + 30;
}


function r2_2(){
    var R1 = document.getElementById("R1_2");
    var R2 = document.getElementById("R2_2");
    var R3 = document.getElementById("R3_2");
    R2.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R1.onclick = 0;
    R3.onclick = 0;

}

function r3_2(){
    var R1 = document.getElementById("R1_2");
    var R2 = document.getElementById("R2_2");
    var R3 = document.getElementById("R3_2");
    R3.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R2.onclick = 0;
    R1.onclick = 0;
}



function r1_3(){
    var R1 = document.getElementById("R1_3");
    var R2 = document.getElementById("R2_3");
    var R3 = document.getElementById("R3_3");
    R1.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R2.onclick = 0;
    R3.onclick = 0;
}


function r2_3(){
    var R1 = document.getElementById("R1_3");
    var R2 = document.getElementById("R2_3");
    var R3 = document.getElementById("R3_3");
    R2.style.backgroundColor = "rgba(4, 207, 4, 0.747)";
    R1.onclick = 0;
    R3.onclick = 0;

    cuenta = cuenta + 20;

}

function r3_3(){
    var R1 = document.getElementById("R1_3");
    var R2 = document.getElementById("R2_3");
    var R3 = document.getElementById("R3_3");
    R3.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R2.onclick = 0;
    R1.onclick = 0;
}



function r1_4(){
    var R1 = document.getElementById("R1_4");
    var R2 = document.getElementById("R2_4");
    var R3 = document.getElementById("R3_4");
    R1.style.backgroundColor = "rgba(4, 207, 4, 0.747)";
    R2.onclick = 0;
    R3.onclick = 0;

    cuenta = cuenta + 25;
}


function r2_4(){
    var R1 = document.getElementById("R1_4");
    var R2 = document.getElementById("R2_4");
    var R3 = document.getElementById("R3_4");
    R2.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R1.onclick = 0;
    R3.onclick = 0;

}

function r3_4(){
    var R1 = document.getElementById("R1_4");
    var R2 = document.getElementById("R2_4");
    var R3 = document.getElementById("R3_4");
    R3.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R2.onclick = 0;
    R1.onclick = 0;
}


function r1_5(){
    var R1 = document.getElementById("R1_5");
    var R2 = document.getElementById("R2_5");
    var R3 = document.getElementById("R3_5");
    R1.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R2.onclick = 0;
    R3.onclick = 0;

}


function r2_5(){
    var R1 = document.getElementById("R1_5");
    var R2 = document.getElementById("R2_5");
    var R3 = document.getElementById("R3_5");
    R2.style.backgroundColor = "rgba(228, 7, 7, 0.76)";
    R1.onclick = 0;
    R3.onclick = 0;

}

function r3_5(){
    var R1 = document.getElementById("R1_5");
    var R2 = document.getElementById("R2_5");
    var R3 = document.getElementById("R3_5");
    R3.style.backgroundColor = "rgba(4, 207, 4, 0.747)";
    R2.onclick = 0;
    R1.onclick = 0;

    cuenta = cuenta + 15;
}


function total(){
    document.getElementById("Total").innerHTML= "Acertaste un " + cuenta + "% de las preguntas";
}


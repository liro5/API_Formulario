
let request = new XMLHttpRequest();
request.addEventListener("load", listener);
request.open("GET", "http://104.43.223.38/Personas");
request.responseType = "json";
request.send();

document.getElementById("titulo").innerHTML = "Personas";
document.getElementById("subtitulo").innerHTML = "Lista de Personas";

function listener() {

    let Personas = request.response;



    for (let i = 0; i < Personas.length; i++) {
        const Persona = Personas[i];

        let tabla = `<tr>
        <td scope='row'>`+ Persona.id + `</td>
        <td scope='row'>`+ Persona.nombre + `</td>
        <td scope='row'>`+ Persona.apellido + `</td>
        <td scope='row'>`+ Persona.direccion + `</td>
        <td scope='row'>`+ Persona.telefono + `</td>
        <td scope='row'>`+ Persona.nacimiento + `</td>
        <tr>`
        document.getElementById("listaPersonas").innerHTML += tabla;
    }
}

function Agregar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let nacimiento = document.getElementById("nacimiento").value;
 
    //document.getElementById("nombre").innerHTML=dato;
    //document.getElementById("apellido").innerHTML=dato1;
    //document.getElementById("direccion").innerHTML=dato2;
    //document.getElementById("telefono").innerHTML=dato3;
    //document.getElementById("nacimiento").innerHTML=dato4;

    if (dato
         != 0)  {
        
    } else {
       
        
    }
}

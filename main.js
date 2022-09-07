
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
    let dato = document.getElementById("nombre").value;
    let dato1 = document.getElementById("apellido").value;
    let dato2 = document.getElementById("direccion").value;
    let dato3 = document.getElementById("telefono").value;
    let dato4 = document.getElementById("nacimiento").value;
 
    document.getElementById("nombre").innerHTML=dato;
    document.getElementById("nombre").innerHTML=dato1;
    document.getElementById("nombre").innerHTML=dato2;
    document.getElementById("nombre").innerHTML=dato3;
    document.getElementById("nombre").innerHTML=dato4;

    if (dato != 0)  {
        
    } else {
       
        
    }
}

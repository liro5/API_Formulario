let request = new XMLHttpRequest();
darPersonas();
function darPersonas() {

    request.addEventListener("load", listener);
    request.open("GET", "http://104.43.223.38/Personas");
    request.responseType = "json";
    request.send();

    document.getElementById("titulo").innerHTML = "Personas";
    document.getElementById("subtitulo").innerHTML = "Lista de Personas";
}

function listener() {
    document.getElementById("listaPersonas").innerHTML = "";
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
        <td scope='row'>`+ "<span onclick='eliminar("+ Persona.id + ")' class='btn material-symbols-outlined'>delete</span>" + `</td>
        <tr>`
        document.getElementById("listaPersonas").innerHTML += tabla;
    }
}

function Agregar() {
    if (document.getElementById("nombre").required) {

    }

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let persona = {
        "nombre": nombre,
        "apellido": apellido,
        "direccion": direccion,
        "telefono": telefono,
        "nacimiento": nacimiento
    }
    if (persona.nombre.length > 2 &&
        persona.apellido.length > 2 &&
        persona.direccion.length > 2 &&
        persona.telefono.length > 2 
      ) {
        // boton de eliminar

    } else {

    }
    let request2 = new XMLHttpRequest();
    request2.addEventListener("load", darPersonas);
    request2.open("POST", "http://104.43.223.38/Personas");
    request2.setRequestHeader("Content-Type", "application/json");
    request2.send(JSON.stringify(persona));

}
function eliminar(id) {
    
    let request3 = new XMLHttpRequest();
    request3.addEventListener("load", darPersonas);
    request3.open("DELETE", "http://104.43.223.38/Personas?idpPrsona=" + id);
    request3.setRequestHeader("Content-Type", "application/json");
    request3.send();

}
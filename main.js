let request = new XMLHttpRequest();
darPersonas();

document.getElementById("titulo").innerHTML = "Personas";
document.getElementById("subtitulo").innerHTML = "Lista de Personas";

function darPersonas() {

    request.addEventListener("load", listener);
    request.open("GET", "http://104.43.223.38/Personas");
    request.responseType = "json";
    request.send();


}
let Personas = [];

function listener() {
    document.getElementById("listaPersonas").value = "";
    Personas = request.response;
    Personas.sort(function (a, b) {
        if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
            return 1;
        }
        if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    ordenar();

    for (let i = 0; i < Personas.length; i++) {
        const Persona = Personas[i];

        let tabla = `<tr>` +
            // <td scope='row'>`+ Persona.id + `</td>
            `<td scope='row'>` + Persona.nombre + `</td>
        <td scope='row'>`+ Persona.apellido + `</td>
        <td scope='row'>`+ Persona.direccion + `</td>
        <td scope='row'>`+ Persona.telefono + `</td>
        <td scope='row'>`+ Persona.nacimiento + `</td>
        <td scope='row'>`+ "<span onclick='eliminar(" + Persona.id + ")' class='colorEliminar btn material-symbols-outlined' >delete</span>" + `</td>
        <tr>`
        document.getElementById("listaPersonas").innerHTML += tabla;
    }
}

function Agregar() {

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

        let request2 = new XMLHttpRequest();
        request2.addEventListener("load", darPersonas);
        request2.open("POST", "http://104.43.223.38/Personas");
        request2.setRequestHeader("Content-Type", "application/json");
        request2.send(JSON.stringify(persona));

        limpiarFormulario();

    } else {

        alert("Por favor complete todos los campos");

    }


}
function eliminar(id) {

    let request3 = new XMLHttpRequest();
    request3.addEventListener("load", darPersonas);
    request3.open("DELETE", "http://104.43.223.38/Personas?idpPrsona=" + id);
    request3.setRequestHeader("Content-Type", "application/json");
    request3.send();

}
function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("nacimiento").value = "";

}

function ordenar() {
    Personas.forEach(element => {
        element.nombre = element.nombre.toLowerCase();
        element.direccion = element.direccion.toLowerCase();
    });
}
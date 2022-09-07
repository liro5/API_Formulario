
let request = new XMLHttpRequest();
request.addEventListener("load", listener);
request.open("GET", "http://104.43.223.38/Personas");
request.responseType = "json";
request.send();

document.getElementById("titulo").innerHTML = "Personas";
document.getElementById("subtitulo").innerHTML = "Lista personas";
function listener() {

    let personas = request.response;
    document.getElementById("titulo").innerHTML = "Personas";
    document.getElementById("subtitulo").innerHTML = "Lista personas";

    // document.getElementById("subtitulo").innerHTML = datos.homeTown;


    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];

        let tabla = `<tr>
        <td scope='row'>`+ persona.id + `</td>
        <td scope='row'>`+ persona.nombre + `</td>
        <td scope='row'>`+ persona.apellido + `</td>
        <td scope='row'>`+ persona.direccion + `</td>
        <td scope='row'>`+ persona.telefono + `</td>
        <td scope='row'>`+ persona.nacimiento + `</td>
        <tr>`
        document.getElementById("listaPersonas").innerHTML += tabla;
    }
}

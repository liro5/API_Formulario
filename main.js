
let request = new XMLHttpRequest();
request.addEventListener("load", listener);
request.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
request.responseType = "json";
request.send();


function listener() {

    let datos = request.response;

    for (let i = 0; i < datos.members.length; i++) {
        const Heroe = datos.members[i];
        let tabla = `<tr>
        <td scope='row'>`+ Heroe.name + `</td>
        <td scope='row'>`+ Heroe.age + `</td>
        <td scope='row'>`+ Heroe.secretIdentity + `</td>
        <tr>`
        document.getElementById("listaHeroes").innerHTML += tabla;
    }
}

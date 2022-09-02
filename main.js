
let request = new XMLHttpRequest();
request.addEventListener("load", listener);
request.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
request.responseType = "json";
request.send();


function listener() {

    let datos = request.response;
    document.getElementById("titulo").innerHTML = datos.squadName;
    document.getElementById("subtitulo").innerHTML = datos.homeTown;
    // document.getElementById("subtitulo").innerHTML = datos.homeTown;
    

    for (let i = 0; i < datos.members.length; i++) {
        const Heroe = datos.members[i];
        
        let tabla = `<tr>
        <td scope='row'>`+ Heroe.name + `</td>
        <td scope='row'>`+ Heroe.age + `</td>
        <td scope='row'>`+ Heroe.secretIdentity + `</td>
        <td scope='row'>`+ Heroe.powers + `</td>
        <tr>`
        document.getElementById("listaHeroes").innerHTML += tabla;
    }
}

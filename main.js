
let request = new XMLHttpRequest();
request.addEventListener("load", listener);
request.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
request.send();

function listener(){

    console.log(this.responseText);
}
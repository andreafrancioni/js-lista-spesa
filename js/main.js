let listaSpesa = ["mele", "uova", "prosciutto", "sottilette", "latte"];

let x = 0;

while(x < listaSpesa.length){
    list = `<li>${(listaSpesa[x])}</li>`;
    document.getElementById("spesa").innerHTML += list;
    x++
}
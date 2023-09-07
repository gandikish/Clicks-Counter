//let precioArticulo = document.getElementById("precioArticulo").value;
//let porcentaje = document.getElementById("porcentaje").value;
//let valor2=document.getElementById("porcentaje").value;
//let precioFinal = precioArticulo/100 * porcentaje;


let btn1 = document.querySelector("#btnClick");
let btn2 = document.querySelector("#btnReset");
let showClicks = document.querySelector("#showData");
let counter = 0;

function printClick(){
    counter++;
    console.log("Acabas de clickear");
    showClicks.innerHTML =counter;
}
function reset(){
    counter = 0;
    showClicks.innerHTML=counter;
}

btn1.addEventListener('click', printClick);
btn2.addEventListener('click', reset);


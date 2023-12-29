
//obtenemos los inputs
const inputRojo     = document.getElementById("rojo")
const inputVerde    = document.getElementById("verde")
const inputAzul     = document.getElementById("azul")
//obtenemos el elemento donde se va amostrar en tiempo real el valor del input
const textoRojo     = document.getElementById("texto-rojo")     
const textoVerde    = document.getElementById("texto-verde")
const textoAzul     = document.getElementById("texto-azul")
const body          = document.querySelector("body")
const container     = document.querySelector(".marco")
//definimos el numero de cada color rojo 23,verde 41, azul 56
let rojo        = inputRojo.value
let verde       = inputVerde.value
let azul        = inputAzul.value
let colorRGB    = `rgb(${rojo},${verde},${azul})`
body.style.backgroundColor=colorRGB
//vmuestra en el documento el valor inicial de los inputs
textoRojo.innerText   = rojo
textoVerde.innerText  = verde
textoAzul.innerText   = azul
//eventos asociados a una serie de instrucciones
inputRojo.addEventListener("change",()=>{
    rojo=inputRojo.value
    textoRojo.innerText=rojo
    colorRGB =`rgb(${rojo},${verde},${azul})`
    body.style.backgroundColor=colorRGB
    if(rojo<=23 && verde<=41 && azul<=56){
        container.style.color="white"
    }else{
        container.style.color="black"
    }})

inputVerde.addEventListener("change",()=>{
    verde   =inputVerde.value
    textoVerde.innerText=verde
    colorRGB =`rgb(${rojo},${verde},${azul})`
    body.style.backgroundColor=colorRGB
    if(rojo<=23 && verde<=41 && azul<=56){
        container.style.color="white"
    }else{
        container.style.color="black"
    }})
    
inputAzul.addEventListener("change",()=>{
    azul    =inputAzul.value
    textoAzul.innerText=azul
    colorRGB =`rgb(${rojo},${verde},${azul})`
    body.style.backgroundColor=colorRGB
    if(rojo<=23 && verde<=41 && azul<=56){
        container.style.color="white"
    }else{
        container.style.color="black"
    }})
    //12:51 PM 26/12/2023
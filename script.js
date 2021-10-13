function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


let array = []
function arrayInitialization(){
    for (let i = 0; i <= 10; i++) {
        array[i] = 0 
    } 
    return array
}

function lancamentos(){
    arrayInitialization()
    for (let i = 0; i < 1000; i++) {
        let A = getRandomInt(1,7)
        let B = getRandomInt(1,7)
        let soma = A + B
        array[soma - 2] += 1
        } 
        return (mostrarTexto(), graficoBarras())  
}
lancamentos()

function mostrarTexto(){
    const body = document.querySelector("body")
    const ul = document.createElement("ul")
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li")
        li.innerText = array[i]
        ul.appendChild(li)
    } 
    body.appendChild(ul)
}

function graficoBarras() {
    const body = document.querySelector("body")
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
        div.innerText = array[i]
        div.style.marginTop = "auto"
        div.style.height = array[i] + "px" 
        div.style.width = `${array[i]}px`
        body.appendChild(div)
    } 
} 
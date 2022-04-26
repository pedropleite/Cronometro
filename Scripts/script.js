var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var miliseconds = document.getElementById("miliseconds")
var ih = 0
var im = 0
var is = 0
var ims = 0
var interval
var begin = false

function play() {
    if ( begin == false)
    interval = setInterval(showTime, 10)
    begin = true
}

function showTime() {
    ims += 10
    if (ims == 1000) {
        ims = 0
        is++  }

    if (is == 60) {
        is = 0
        im++   }

    if (im == 60) {
        im = 0
        ih++ }


    if (ih < 10) { ho = "0" + ih }
    else { ho = ih }

    if (im < 10) { mi = "0" + im }
    else { mi = im }

    if (is < 10) { se = "0" + is }
    else { se = is }


    hours.innerText = ho
    minutes.innerText = mi
    seconds.innerText = se
    miliseconds.innerText = ims
}

function pause() {
    clearInterval(interval)
    begin = false
}

function erase() {
    ims = 0
    is = 0
    im = 0
    ih = 0

    hours.innerText = "00"
    minutes.innerText = "00"
    seconds.innerText = "00"
    miliseconds.innerText = "000"

}

function add(){
    let div = document.getElementById("names")
    let h3 = document.createElement("h3")
    let texto = document.createTextNode(" O tempo salvo é de " + ih + " horas, " + im + " minutos, "
     + is + " segundos e " + ims + " milisegundos")

    div.appendChild(h3)
    h3.appendChild(texto)
}

function delet(){
    element = document.getElementById("names")
    element.innerHTML = ""
}
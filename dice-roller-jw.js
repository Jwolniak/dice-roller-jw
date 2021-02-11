// this will allow the user to roll the dice
// upon launching the webpage and pressing the button

// this function will roll the d4
function rollD4(){
    document.getElementById("d4").value = Math.floor(Math.random()*4) + 1;
}

//this function will roll the d6
function rollD6(){
    document.getElementById("d6").value = Math.floor(Math.random()*6) + 1;
}

// this function will roll the d8
function rollD8(){
    document.getElementById("d8").value = Math.floor(Math.random()*8) + 1;
}

//this function will roll the d10
function rollD10(){
    document.getElementById("d10").value = Math.floor(Math.random()*10) + 1;
}

// this function will roll the d12
function rollD12(){
    document.getElementById("d12").value = Math.floor(Math.random()*12) + 1;
}

// this function will roll the d20
function rollD20(){
    document.getElementById("d20").value = Math.floor(Math.random()*20) + 1;
}
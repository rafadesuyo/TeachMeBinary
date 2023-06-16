
//Lamps bellow are divided by section name.

//What is binary lamp.
let whatIsBinaryLamp = 0

//Combine multiple lamps
let combineLamp1 = 0
let combineLamp2 = 0

//Test you knowledge lamps
let testLamp1 = 0
let testLamp2 = 0
let testLamp3 = 0
let testLamp4 = 0

//
const light = document.getElementById('light-example-1')
const currentColor = light.getAttribute('fill')
const number0 = document.getElementById('numberToggle0')

//Todo add other lamps down here


//this is a click sound for whenever the user clicks on a lamp
const clickSound = new Audio("assets/click.mp3"); 

function toggleLight() {
    const currentColor = light.getAttribute('fill')
    clickSound.play()
    if (currentColor === '#0C1016') {
        light.setAttribute('fill', '#FFD542');
    }else{
        light.setAttribute('fill', '#0C1016');
    }
    
    if(whatIsBinaryLamp == 0)
    {
        number0.textContent = "1";
        whatIsBinaryLamp = 1;
    }
    else if(whatIsBinaryLamp == 1)
    {
        number0.textContent = "0";
        whatIsBinaryLamp = 0;
    }
    
}

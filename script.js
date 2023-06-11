
//Down bellow are the number of each lamp, lamps are divided by section name.
let whatIsBinaryLamp = 0

//Todo add other lamps down here


//this is a click sound for whenever the user clicks on a lamp
const clickSound = new Audio("assets/click.mp3"); 

function toggleLight() {
    const light = document.getElementById('light-example-1')
    const currentColor = light.getAttribute('fill')
    clickSound.play()
    if (currentColor === '#0C1016') {
        light.setAttribute('fill', '#FFD542')
    } else {
        light.setAttribute('fill', '#0C1016')
    }

    //switching the numbers
    const number0 = document.getElementById('numberToggle0')
    const number1 = document.getElementById('numberToggle1')
    
    if(whatIsBinaryLamp == 0)
    {
        //display none = invisible
        //display block = visible
        number0.style.display = "none"
        number1.style.display = "block"
        whatIsBinaryLamp = 1
    }
    else if(whatIsBinaryLamp == 1)
    {
        number1.style.display = "none"
        number0.style.display = "block"
        whatIsBinaryLamp = 0
    }
    
}

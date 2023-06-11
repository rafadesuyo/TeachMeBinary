let currentNumber = 0 // we might need to track every single 0 and 1 value in the entire code later, this is tracking only the first 0
const clickSound = new Audio("assets/click.mp3"); //this is a click sound for whenever the user clicks on the lamp

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
    
    if(currentNumber == 0)
    {
        //display none = invisible
        //display block = visible
        number0.style.display = "none"
        number1.style.display = "block"
        currentNumber = 1
    }
    else if(currentNumber == 1)
    {
        number1.style.display = "none"
        number0.style.display = "block"
        currentNumber = 0
    }
    
}

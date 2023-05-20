let currentNumber = 0 // we might need to track every single 0 and 1 value in the entire code later, this is tracking only the first 0

function toggleLight() {
    const light = document.getElementById('light-example-1')
    const currentColor = light.getAttribute('fill')
    if (currentColor === '#272727') {
        light.setAttribute('fill', '#FFD542')
    } else {
        light.setAttribute('fill', '#272727')
    }

    //switching the numbers
    const number0 = document.getElementById('numberToggle0')
    const number1 = document.getElementById('numberToggle1')
    
    if(currentNumber == 0)
    {
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

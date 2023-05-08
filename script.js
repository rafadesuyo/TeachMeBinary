function toggleLight() {
    const light = document.getElementById('light-example-1')
    const currentColor = light.getAttribute('fill')
    if (currentColor === '#272727') {
        light.setAttribute('fill', '#FFD542')
    } else {
        light.setAttribute('fill', '#272727')
    }
}

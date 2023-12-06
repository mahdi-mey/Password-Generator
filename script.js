const lengthInput = document.querySelector('#length')
const lengthH3 = document.querySelector('.input-container h3')

lengthInput.addEventListener('input', function() {
    lengthH3.textContent = this.value
})
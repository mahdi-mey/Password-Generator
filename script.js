// change h3 value when range input changes value
const lengthInput = document.querySelector('#length')
const lengthH3 = document.querySelector('.input-container h3')

lengthInput.addEventListener('input', function() {
    lengthH3.textContent = this.value
})

// Get the UI elements
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthRangeInput = document.getElementById('length');
const lengthLabel = document.querySelector('.length-label');
const resaultContainer = document.querySelector('.resault-container');
const resault = document.querySelector('.resault');
const clipboardButton = document.getElementById('clippboard');
// change h3 value when range input changes value
const lengthInput = document.querySelector('#length')
const lengthH3 = document.querySelector('.input-container h3')

lengthInput.addEventListener('input', function () {
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

// Define character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_-+=';


// Generate a random character from a string
function getRandomChar(characters) {
    const index = Math.floor(Math.random() * characters.length);
    return characters.charAt(index);
}

// Generate a random password based on user preferences
function generatePassword() {
    let allowedChars = '';
    let password = '';

    // Determine which character sets to include
    if (lowercaseCheckbox.checked) {
        allowedChars += lowercaseChars;
    }

    if (uppercaseCheckbox.checked) {
        allowedChars += uppercaseChars;
    }

    if (numbersCheckbox.checked) {
        allowedChars += numberChars;
    }

    if (symbolsCheckbox.checked) {
        allowedChars += symbolChars;
    }

    // Get the password length from the range input
    const passwordLength = parseInt(lengthRangeInput.value);

    // Generate the password
    for (let i = 0; i < passwordLength; i++) {
        const randomChar = getRandomChar(allowedChars);
        password += randomChar;
    }

    // Display the password
    resault.innerText = password;
}

function copyToClipboard(){
    password = resault.innerText
    navigator.clipboard.writeText(password)
}

// Attach the generatePassword function to the change event of the input elements
lowercaseCheckbox.addEventListener('change', generatePassword);
uppercaseCheckbox.addEventListener('change', generatePassword);
numbersCheckbox.addEventListener('change', generatePassword);
symbolsCheckbox.addEventListener('change', generatePassword);
lengthRangeInput.addEventListener('input', generatePassword);

// Attach the copyToClipboard function to the click event of the clipboardButton
clipboardButton.addEventListener('click', copyToClipboard); 
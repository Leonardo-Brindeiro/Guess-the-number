let computerNumber
let userNumbers = []

// a função init inicializadora vou jogar ela no meu body la no html 
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1) // guardando dentro de uma variável 
    console.log(computerNumber);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers


    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too high'

    }
    else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too high'

    }
    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations'
    }

}
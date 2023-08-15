let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

// a função init inicializadora vou jogar ela no meu body la no html 
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1) // guardando dentro de uma variável 

}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers


    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts

        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts

        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose! + The number computer was ' + computerNumber
    }
}
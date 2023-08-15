let computerNumber
let userNumbers = []

// a função init inicializadora vou jogar ela no meu body la no html 
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber);
}



function compareNummbers() {
    const userNumber = Number(document.getElementById('inputBox').value)

}
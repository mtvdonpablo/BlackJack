let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
function startGame() {
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    console.log(message)
    messageEL.textContent = message
    
}



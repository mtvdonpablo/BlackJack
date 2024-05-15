let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let player = {
    name: "Player",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    console.log(cards)
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
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
    messageEL.textContent = message
}
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing new card")
        let extraCard = getRandom()
        sum += extraCard
        cards.push(extraCard)
        console.log(cards)
        renderGame()
    }

}
function getRandom() {
    let ranNum = Math.floor(Math.random() * 13) + 1
    if (ranNum >= 11) {
        return 10
    } else if (ranNum === 1) {
        return 11
    } else {
        return ranNum
    }
}

// treaeting Ace as 11 only
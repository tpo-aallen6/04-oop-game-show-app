/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * app.js
**/

let game

/**
 * event listener for the start button that starts a new game
**/

document.querySelector('#btn__reset').addEventListener('click', (e) => {
  game = new Game()
  game.startGame()
})

/**
 * event listener for the on screen keyboard button clicks
**/

document.querySelector('#qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
})

/**
 * event listener for the keyboard keyup event
 * callse handleInteraction() if the game has been started,
 * the player has lives remaining, and the key pressed
 * is a character (a-z) on the qwerty keyboard
**/

document.addEventListener('keyup', (e) => {
  if (document.querySelector('#overlay').style.display === 'none') {
    const key = e.key
    const keyButtons = document.querySelectorAll('button.key')
    let button

    if (key !== ' ') {
      if (game.checkForWin() || game.missed === 5) {
        return
      }

      for (let i = 0; i < keyButtons.length; i++) {
        if (key === keyButtons[i].textContent) {
          button = keyButtons[i]
          if (button.disabled) {
            break
          }
          game.handleInteraction(button)
        }
      }
    }
  }
})

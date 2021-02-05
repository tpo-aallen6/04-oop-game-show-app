/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * app.js
**/

let game

document.querySelector('#btn__reset').addEventListener('click', (e) => {
  game = new Game()
  game.startGame()
})

document.querySelector('#qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
})

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

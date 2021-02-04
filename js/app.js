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

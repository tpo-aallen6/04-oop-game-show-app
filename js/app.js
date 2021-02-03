/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * app.js
**/

let game = new Game()
// game.getRandomPhrase().addPhraseToDisplay()
// console.log(game.getRandomPhrase())

document.querySelector('#btn__reset').addEventListener('click', (e) => {
  game = new Game()
  game.startGame()
})

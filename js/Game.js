/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * Game.js
 **/

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('This is the way'),
      new Phrase('Blood and thunder'),
      new Phrase('Strength and honor'),
      new Phrase('and the gunslinger followed'),
      new Phrase('That was falling with style'),
      new Phrase('Reach for the sky'),
      new Phrase('Cool cool cool cool no doubt'),
      new Phrase('For the Horde'),
      new Phrase('Khajiit has wares if you have coin'),
      new Phrase('There is no Pepe Silvia')
    ]
    this.activePhrase = null
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
  **/

  startGame () {
    document.querySelector('#overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  getRandomPhrase () {
    const random = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[random]
  }

  handleInteraction () {
    // do lots of things
  }

  removeLife () {
    const liveHearts = document.querySelectorAll('li.tries img')

    for (let i = 0; i < liveHearts.length; i++) {
      if (this.missed === i) {
        liveHearts[i].src = 'images/lostHeart.png'
      }
    }

    this.missed++
  }

  checkForWin () {
    const letters = document.querySelectorAll('#phrase ul li.letter')
    const lettersArray = Array.from(letters)
    return lettersArray.every(letter => letter.classList.contains('show'))
  }

  gameOver (gameWon) {
    // do something
  }
}

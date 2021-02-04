/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * Game.js
 **/

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('this is the way'),
      new Phrase('d and d ruined thrones'),
      new Phrase('may the force be with you'),
      new Phrase('and the gunslinger followed'),
      new Phrase('somebody poisoned the waterhole'),
      new Phrase('reach for the sky'),
      new Phrase('theres a snake in my boots'),
      new Phrase('forget about it')
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

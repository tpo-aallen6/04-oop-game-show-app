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
    document.querySelectorAll('#phrase ul li')
      .forEach(li => li.parentNode.removeChild(li))

    for (let i = 0; i < 5; i++) {
      const heartImages = document.querySelectorAll('li.tries img')
      heartImages[i].src = 'images/liveHeart.png'
    }

    document.querySelectorAll('button.key').forEach(button => {
      button.disabled = false
      button.classList.remove('chosen')
      button.classList.remove('wrong')
    })

    document.querySelector('#overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  getRandomPhrase () {
    const random = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[random]
  }

  handleInteraction (button) {
    const isLetterInPhrase = this.activePhrase.checkLetter(button.textContent)
    button.disabled = true

    if (isLetterInPhrase) {
      button.classList.add('chosen')
      this.activePhrase.showMatchedLetter(button.textContent)
      this.checkForWin()

      if (this.checkForWin()) {
        this.gameOver('win')
      }
    } else {
      button.classList.add('wrong')
      this.removeLife()
    }
  }

  removeLife () {
    const heartImages = document.querySelectorAll('li.tries img')
    heartImages[this.missed].src = 'images/lostHeart.png'
    this.missed++

    if (this.missed === 5) {
      this.gameOver('lose')
    }
  }

  checkForWin () {
    return Array
      .from(document.querySelectorAll('#phrase ul li.letter'))
      .every(element => element.classList.contains('show'))
  }

  gameOver (result) {
    document.querySelector('#overlay').style.display = 'block'

    if (result === 'win') {
      document.querySelector('#overlay').className = 'win'
      document.querySelector('#game-over-message').textContent = 'Congratulations, you win!'
    } else {
      document.querySelector('#overlay').className = 'lose'
      document.querySelector('#game-over-message').textContent = 'Sorry, you lose.'
    }
  }
}

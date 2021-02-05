/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * Phrase.js
**/

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
  * Display phrase on game board
  **/

  addPhraseToDisplay () {
    const ul = document.querySelector('#phrase ul')
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li')
      const char = this.phrase.charAt(i)

      if (char === ' ') {
        li.className = 'space'
      } else {
        li.className = `hide letter ${char}`
        li.textContent = char
      }

      ul.append(li)
    }
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  **/

  checkLetter (letter) {
    return this.phrase.includes(letter.toLowerCase())
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  **/

  showMatchedLetter (letter) {
    letter = letter.toLowerCase()
    const letterElements = document.querySelectorAll(`li[class="hide letter ${letter}"]`)
    letterElements.forEach(element => element.classList.replace('hide', 'show'))
  }
}

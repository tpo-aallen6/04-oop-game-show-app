/** Treehouse FSJS Techdegree - Adam Allen
 * Project 4 - OOP Game App
 * Phrase.js
**/

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

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

  checkLetter (letter) {
    return this.phrase.includes(letter.toLowerCase())
  }

  showMatchedLetter (letter) {
    letter = letter.toLowerCase()
    const letterElements = document.querySelectorAll(`li[class="hide letter ${letter}"]`)
    letterElements.forEach(element => element.classList.replace('hide', 'show'))
  }
}

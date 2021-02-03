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

      if (this.phrase.charAt(i) === ' ') {
        li.className = 'space'
      } else {
        li.className = `hide letter ${this.phrase.charAt(i)}`
        li.textContent = this.phrase.charAt(i)
      }

      ul.append(li)
    }
  }

  checkLetter (letter) {
    return this.phrase.includes(letter)
  }

  showMatchedLetter (letter) {
    const letters = document.querySelectorAll(`li[class="hide letter ${letter}"]`)
    letters.forEach(_letter_ => _letter_.classList.replace('hide', 'show'))
  }
}

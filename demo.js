const wordscount = require('.')
const getWordsArray = require('.').getWordsArray

const text = 'Love to hate to love'

const wordsArray = getWordsArray(text)
console.log(wordsArray)

const textWordsCount = wordscount(text)

// Object.keys(textWordsCount) // ['love', 'to', 'hate']
// console(textWordsCount.love) // 2
// console(textWordsCount.to) // 2
// console(textWordsCount.hate) // 1

console.log(textWordsCount)

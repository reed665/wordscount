const wc = require('./src/wordscount')

const text = 'Love to hate to love'
const textWordsCount = wc(text)

// Object.keys(textWordsCount) // ['love', 'to', 'hate']
// console(textWordsCount.love) // 2
// console(textWordsCount.to) // 2
// console(textWordsCount.hate) // 1

console.log(textWordsCount)

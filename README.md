# wordscount

Simple function to help you count words in a text

## Installation
```bash
npm i @reed665/wordscount
```

## Usage
```javascript
import wordscount from '@reed665/wordscount'

const text = 'Love to hate to love'
const textWordsCount = wordscount(text)

Object.keys(textWordsCount) // ['love', 'to', 'hate']
textWordsCount.love // 2
textWordsCount.to // 2
textWordsCount.hate // 1
```

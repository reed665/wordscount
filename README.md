# wordscount

## Installation
```bash
npm i wordscount
```

## Usage
```javascript
import wc from 'wordscount'

const text = 'Love to hate to love'
const textWordsCount = wc(text)

Object.keys(textWordsCount) // ['love', 'to', 'hate']
textWordsCount.love // 2
textWordsCount.to // 2
textWordsCount.hate // 1
```

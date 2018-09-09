const wordscount = require('./wordscount');
const getWordsArray = require('./wordscount').getWordsArray;

describe('getWordsArray', () => {
  it('return correct words array if separated with spaces only', () => {
    const text = 'Love to hate to love'

    expect(getWordsArray(text)).toEqual(['love', 'to', 'hate', 'to', 'love'])
  })

  it('return correct words array if string contains spaces, dots and commas', () => {
    const text = 'Love to hate, hate to love.'

    expect(getWordsArray(text)).toEqual(['love', 'to', 'hate', 'hate', 'to', 'love'])
  })

  it('return correct words array for multiline text', () => {
    const text = `
    Love to hate,
    hate to love.
    `

    expect(getWordsArray(text)).toEqual(['love', 'to', 'hate', 'hate', 'to', 'love'])
  })
})

describe('wordscount', () => {
  it('provides an object as a result', () => {
    const text = 'Love to hate to love'

    expect(typeof wordscount(text)).toBe('object')
  })

  it('throws an error if first argument is not a string', () => {
    const text = 42

    expect(() => wordscount(text)).toThrowError('string expected but got number')
  })

  it('counts words correctly if separated with spaces only', () => {
    const text = 'Love to hate to love'

    expect(wordscount(text).love).toBe(2)
    expect(wordscount(text).to).toBe(2)
    expect(wordscount(text).hate).toBe(1)
  })
})

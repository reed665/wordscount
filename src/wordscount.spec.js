const wc = require('./wordscount');

describe('wordscount', () => {
  it('provides an object as a result', () => {
    const text = 'Love to hate to love'

    expect(typeof wc(text)).toBe('object')
  })

  it('throws an error if first argument is not a string', () => {
    const text = 42

    expect(() => wc(text)).toThrowError('string expected but got number')
  })

  it('counts words correctly if separated with spaces only', () => {
    const text = 'Love to hate to love'

    expect(wc(text).love).toBe(2)
    expect(wc(text).to).toBe(2)
    expect(wc(text).hate).toBe(1)
  })
})

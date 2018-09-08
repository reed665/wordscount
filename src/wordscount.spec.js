const wc = require('./wordscount');

describe('wordscount', () => {
  it('provides an object as a result', () => {
    const text = 'Love to hate to love'

    expect(typeof wc(text)).toBe('object')
  })

  it('counts words correctly', () => {
    const text = 'Love to hate to love'

    expect(wc(text).love).toBe(2)
    expect(wc(text).to).toBe(2)
    expect(wc(text).hate).toBe(1)
  })
})

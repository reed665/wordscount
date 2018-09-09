function wordscount(text) {
  const wordsArray = getWordsArray(text)
  return wordsArray.reduce((wcObj, word) => {
    return {
      ...wcObj,
      [word]: wcObj[word] === undefined ? 1 : wcObj[word] + 1
    }
  }, {});
}

function getWordsArray(text, separatorRegex = /\W+/) {
  if (typeof text !== 'string') {
    throw new Error(`string expected but got ${typeof text}`)
  }
  return text.trim().toLowerCase().split(separatorRegex).filter(word => !!word)
}

module.exports = wordscount;
module.exports.getWordsArray = getWordsArray;

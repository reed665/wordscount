function wordscount(text) {
  const wordsArray = text.toLowerCase().split(' ')
  return wordsArray.reduce((wcObj, word) => {
    return {
      ...wcObj,
      [word]: wcObj[word] === undefined ? 1 : wcObj[word] + 1
    }
  }, {});
}

module.exports = wordscount;

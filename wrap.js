function wrap(line, maxLen) {
  let output = [];

  let wordArr = line.split(' ');
  console.log('This is the word array =>', wordArr);

  // wordArr.every(entry => !entry)
  if (!line || typeof line !== 'string' || typeof maxLen !== 'number') {
    return '';
  }

  let currentLine = '';

  for (var a = 0; a < wordArr.length; a++) {
    let currentWord = wordArr[a];
    if (currentLine.length + currentWord.length > maxLen) {
      output.push(currentLine);
      currentLine = currentWord;
    } else {
      currentLine += currentWord + ' ';
    }
  }
  return output.join('\n');
}

module.exports = wrap;

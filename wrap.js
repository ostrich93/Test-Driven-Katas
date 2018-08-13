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
    // console.log('currentWord: ', currentWord);
    if (currentLine.length + currentWord.length > maxLen) {
      output.push(currentLine);
      currentLine = currentWord + ' ';
    } else {
        if (currentLine.length + currentWord.length === maxLen){
            currentLine += currentWord;
            output.push(currentLine);
        }
        else {
            currentLine += currentWord + ' ';
        }
    }
    console.log('currentLine: ', currentLine);
  }
  return output.join('\n');
}

module.exports = wrap;

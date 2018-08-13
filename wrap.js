function wrap(line, maxLen) {
  if (typeof line !== 'string' || typeof maxLen !== 'number'){
    return '';
  }

  if (line.length <= maxLen){
    return line;
  }

  const blankSpaceIndex = line.lastIndexOf(' ', maxLen);
  let offset;
  let numOfSpaces;
  if (blankSpaceIndex > -1){
    offset = blankSpaceIndex;
    numOfSpaces = 1;
  }
  else {
    offset = maxLen;
    numOfSpaces = 0;
  }
  return line.substring(0, offset) + '\n' + wrap(line.substring(offset + numOfSpaces), maxLen);
}

module.exports = wrap;

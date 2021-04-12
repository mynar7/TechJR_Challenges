function encodeCaesarCypher(str, shift) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lowerLetterArr = letters.split("");
  const upperLetterArr = letters.toUpperCase().split("");
  shift = shift % letters.length;
  return str
    .split("")
    .map((char) => {
      const indexLower = lowerLetterArr.indexOf(char);
      const indexUpper = upperLetterArr.indexOf(char);
      if (indexUpper > -1 || indexLower > -1) {
        const [index, letterArr] =
          indexUpper > -1
            ? [indexUpper, upperLetterArr]
            : [indexLower, lowerLetterArr];
        let newIndex = index + shift;
        if (newIndex >= letterArr.length) newIndex -= letterArr.length;
        return letterArr[newIndex];
      }
      return char;
    })
    .join("");
}

function decodeCaesarCypher(str, shift) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lowerLetterArr = letters.split("");
  const upperLetterArr = letters.toUpperCase().split("");
  shift = shift % letters.length;
  return str
    .split("")
    .map((char) => {
      const indexLower = lowerLetterArr.indexOf(char);
      const indexUpper = upperLetterArr.indexOf(char);
      if (indexUpper > -1 || indexLower > -1) {
        const [index, letterArr] =
          indexUpper > -1
            ? [indexUpper, upperLetterArr]
            : [indexLower, lowerLetterArr];
        let newIndex = index - shift;
        if (newIndex < 0) newIndex += letterArr.length;
        return letterArr[newIndex];
      }
      return char;
    })
    .join("");
}

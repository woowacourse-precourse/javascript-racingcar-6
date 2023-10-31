import SYMBOLS from "../../constants/symbols.js";

class Winner {
  whoWinner(keyValue) {
    let maxName = [];
    let maxLength = 0;
    for (const item of keyValue) {
      const name = Object.keys(item)[0];
      const value = item[name];
      const hyphenLength = value.split(SYMBOLS.hyphen).length - 1;

      if (hyphenLength > maxLength) {
        maxLength = hyphenLength;
        maxName = [name];
      } else if (hyphenLength === maxLength) {
        maxName.push(name);
      }
    }
    return maxName;
  }
}
export default Winner;

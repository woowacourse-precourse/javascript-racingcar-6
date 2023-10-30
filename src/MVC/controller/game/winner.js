import Output from "../../view/Output.js";
import SYMBOLS from "../../Constants/symbols.js";

const winner = (keyValue) => {
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
  Output.winnerPrint(maxName);
};

export default winner;

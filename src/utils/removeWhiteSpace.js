import REGEXS from '../constants/regexs.js';
import SYMBOLS from '../constants/symbols.js';

const removeWhiteSpace = inputString => {
  return inputString.replace(REGEXS.rWhiteSpace, SYMBOLS.whiteSpace);
};

export default removeWhiteSpace;

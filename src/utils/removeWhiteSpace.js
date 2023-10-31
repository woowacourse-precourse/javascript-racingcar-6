import REGEXS from '../constants/regexs.js';

const removeWhiteSpace = inputString => {
  return inputString.replace(REGEXS.rWhiteSpace, '');
};

export default removeWhiteSpace;

import { ERROR_MESSAGE } from './message.js';

const checkErrorInputName = (inputArr) => {
  const uniqueArr = new Set(inputArr);
  if (uniqueArr.size !== inputArr.length) throw new Error(ERROR_MESSAGE.DUPLICATE);
  for (const name of inputArr) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.LENGTH);
  }
};

const checkErrorPlayNumber = (inputNum) => {
  if (isNaN(inputNum)) throw new Error(ERROR_MESSAGE.TYPE);
  if (inputNum < 1) throw new Error(ERROR_MESSAGE.SCOPE);
};

export { checkErrorInputName, checkErrorPlayNumber };

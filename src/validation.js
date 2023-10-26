import { ERROR_MESSAGE } from './message.js';

const checkErrorInputName = (inputArr) => {
  const uniqueArr = new Set(inputArr);
  if (uniqueArr.size !== inputArr.length) throw new Error(ERROR_MESSAGE.duplicate);
  for (const name of inputArr) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.length);
  }
};

const checkErrorPlayNumber = (inputNum) => {
  if (isNaN(inputNum)) throw new Error(ERROR_MESSAGE.type);
  if (inputNum < 1) throw new Error(ERROR_MESSAGE.scope);
};

export { checkErrorInputName, checkErrorPlayNumber };

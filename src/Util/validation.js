import { ERROR_MESSAGE } from './message.js';

const checkErrorInputName = (inputArr) => {
  if (inputArr[0] === '') throw new Error(ERROR_MESSAGE.empty);
  const uniqueArr = [...new Set(inputArr)];
  if (uniqueArr.length !== inputArr.length) throw new Error(ERROR_MESSAGE.duplicate);
  for (const name of uniqueArr) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.length);
  }
};

const checkErrorPlayNumber = (inputNum) => {
  if (!Number.isFinite(inputNum)) throw new Error(ERROR_MESSAGE.type);
  if (inputNum < 1) throw new Error(ERROR_MESSAGE.scope);
};

export { checkErrorInputName, checkErrorPlayNumber };

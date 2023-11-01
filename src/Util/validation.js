import { ERROR_MESSAGE } from './message.js';

const checkErrorInputName = (inputArr) => {
  if (inputArr[0] === '') throw new Error(ERROR_MESSAGE.empty);

  const uniqueArr = [...new Set(inputArr)];
  if (uniqueArr.length !== inputArr.length) throw new Error(ERROR_MESSAGE.duplicate);

  const lengthFlag = uniqueArr.some((name) => name.length > 5);
  if (lengthFlag) throw new Error(ERROR_MESSAGE.length);
};

const checkErrorPlayNumber = (inputNum) => {
  if (!Number.isFinite(inputNum)) throw new Error(ERROR_MESSAGE.type);
  if (inputNum < 1) throw new Error(ERROR_MESSAGE.scope);
};

export { checkErrorInputName, checkErrorPlayNumber };

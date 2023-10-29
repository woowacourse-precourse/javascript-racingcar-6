import { ERROR_MESSAGES } from './Constants.js';

const checkCarNameEmpty = (carName) => {
  if (!carName.length) throw new Error(ERROR_MESSAGES.errorNameEmpty);
};

const checkCarNameSpace = (carName) => {
  if (carName.length !== carName.trim().length)
    throw new Error(ERROR_MESSAGES.errorNameSpace);
};

const checkCarNameLen = (carName) => {
  carName.split(',').forEach((car) => {
    if (car.length > 5) throw new Error(ERROR_MESSAGES.errorNameLen);
  });
};
const checkCarNameType = (carName) => {
  const regex = /[^a-zA-Z가-힣]/;
  if (regex.test(carName.split(',').join('')))
    throw new Error(ERROR_MESSAGES.errorNameType);
};

const checkTryNumType = (tryNum) => {
  if (tryNum.match(/\D/g)) throw new Error(ERROR_MESSAGES.errorTryNumType);
};

const checkTryNumZero = (tryNum) => {
  if (!Number(tryNum)) throw new Error(ERROR_MESSAGES.errorTryNumZero);
};

export const checkTryNum = (tryNum) => {
  checkTryNumType(tryNum);
  checkTryNumZero(tryNum);
};

export const checkCarNameInput = (carName) => {
  checkCarNameEmpty(carName);
  checkCarNameSpace(carName);
  checkCarNameLen(carName);
  checkCarNameType(carName);
};

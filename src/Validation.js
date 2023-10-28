import { ERROR_MESSAGES } from './Message.js';

const checkCarNameEmpty = (carName) => {
  if (!carName.length) throw new Error(ERROR_MESSAGES.ERROR_NAME_EMPTY);
};

const checkCarNameSpace = (carName) => {
  if (carName.length !== carName.trim().length)
    throw new Error(ERROR_MESSAGES.ERROR_NAME_SPACE);
};

const checkCarNameLen = (carName) => {
  carName.split(',').forEach((car) => {
    if (car.length > 5) throw new Error(ERROR_MESSAGES.ERROR_NAME_LEN);
  });
};
const checkCarNameType = (carName) => {
  const regex = /[^a-zA-Z가-힣]/;
  if (regex.test(carName.split(',').join('')))
    throw new Error(ERROR_MESSAGES.ERROR_NAME_TYPE);
};

const checkTryNumType = (tryNum) => {
  if (tryNum.match(/\D/g)) throw new Error(ERROR_MESSAGES.ERROR_TRY_NUM_TYPE);
};

const checkTryNumZero = (tryNum) => {
  if (!~~tryNum) throw new Error(ERROR_MESSAGES.ERROR_TRY_NUM_ZERO);
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

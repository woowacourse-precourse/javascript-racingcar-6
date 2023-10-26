import { ERROR_MESSAGES } from './Message.js';

export const checkCarNameInput = (carName) =>{
  checkCarNameEmpty(carName);
  checkCarNameSpace(carName);
  checkCarNameLen(carName);
  checkCarNameType(carName);
}

const checkCarNameEmpty = (carName) => {
  if (!carName.length) throw new Error(ERROR_MESSAGES.ERROR_NAME_EMPTY);
};

const checkCarNameSpace = (carName) => {
  if (carName.length !== carName.trim().length)
    throw new Error(ERROR_MESSAGES.ERROR_NAME_SPACE);
};

const checkCarNameLen = (carName) => {
  carName.split(',').map((el) => {
    if (el.length > 5) throw new Error(ERROR_MESSAGES.ERROR_NAME_LEN);
  });
};
const checkCarNameType = (carName) => {
  const regex = /[^a-zA-Z가-힣]/;
  if (regex.test(carName.split(',').join('')))
    throw new Error(ERROR_MESSAGES.ERROR_NAME_TYPE);
};

export const checkTryNumType = (tryNum) => {
  if(tryNum.match(/\D/g)) throw new Error(ERROR_MESSAGES.ERROR_TRY_NUM_TYPE);
}
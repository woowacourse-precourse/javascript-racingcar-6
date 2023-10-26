import { ERROR_MESSAGE } from './message.js';

const checkErrorInputName = (inputArr) => {
  for (const name of inputArr) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.LENGTH);
  }
};

export default checkErrorInputName;

import { MESSAGE } from '../../constants.js';
import { Input } from '../../interface/Input.js';
import { TryValidation } from './Validation.js';

export const getTry = async () => {
  try {
    const tryValue = await Input(MESSAGE.TRY.INPUT);
    const tryValidation = new TryValidation(tryValue);
    tryValidation.validate();

    return tryValue;
  } catch (e) {
    return new Promise((_, reject) => {
      reject(e);
    });
  }
};

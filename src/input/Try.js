import { MESSAGE } from '../constants.js';
import { Input } from '../interface/Input.js';
import { validate } from './validations.js';

export const getTry = async () => {
  try {
    const input = await Input(MESSAGE.TRY.INPUT);
    validate.try(input);

    return input;
  } catch (e) {
    throw new Error(e);
  }
};

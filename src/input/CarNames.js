import { MESSAGE } from '../constants.js';
import { Input } from '../interface/Input.js';
import { stringToArray } from '../utils.js';
import { validate } from './validations.js';

export const getCarNames = async () => {
  try {
    const names = await Input(MESSAGE.CAR_NAME.INPUT);
    validate.carNames(stringToArray(names));

    return stringToArray(names);
  } catch (e) {
    throw new Error(e);
  }
};

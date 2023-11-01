import { MESSAGE } from '../constants.js';
import { Input } from '../interface/Input.js';
import { validate } from './validations.js';

export const getCarNames = async () => {
  try {
    const names = await Input(MESSAGE.CAR_NAME.INPUT);
    validate.carNames(names);

    return names.split(',');
  } catch (e) {
    throw new Error(e);
  }
};

import { MESSAGE } from '../constants';
import { Input } from '../interface/Input';
import { validate } from './validations';

export const getName = async () => {
  try {
    const names = await Input(MESSAGE.CAR_NAME.INPUT);
    validate.carNames(names);

    return names;
  } catch (e) {
    return new Promise((_, reject) => {
      reject(e);
    });
  }
};

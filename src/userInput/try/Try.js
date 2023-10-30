import { MESSAGE } from '../../constants.js';
import { Input } from '../../interface/Input.js';

export const getTry = async () => {
  try {
    const tryValue = await Input(MESSAGE.TRY.INPUT);

    return tryValue;
  } catch (e) {
    return new Promise((_, reject) => {
      reject(e);
    });
  }
};

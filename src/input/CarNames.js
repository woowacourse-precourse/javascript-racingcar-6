import { MESSAGE } from '../constants';
import { Input } from '../interface/Input';
import { validate } from './validations';

export class CarNames {
  #name;

  async getName() {
    try {
      const name = await Input(MESSAGE.CAR_NAME.INPUT);
      validate.carNames(name);

      this.#name = name;
    } catch (e) {
      return new Promise((_, reject) => {
        reject(e);
      });
    }
  }
}

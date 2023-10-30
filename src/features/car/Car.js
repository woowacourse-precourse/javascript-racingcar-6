import { MESSAGE } from '../../constants.js';
import { Input } from '../../interface/Input.js';
import { CarNameValidation } from './Validation.js';

export class Car {
  #name;

  async getName() {
    try {
      const name = await Input(MESSAGE.CAR_NAME.INPUT);
      const carValidation = new CarNameValidation(name);
      carValidation.validate();

      this.#name = name;
    } catch (e) {
      return new Promise((_, reject) => {
        reject(e);
      });
    }
  }

  a;
}

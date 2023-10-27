import Validator from '../../utils/Validator';
import Input from '../View/Input';

export default class RacingGame {
  #carModel;

  constructor(carModel) {
    this.#carModel = carModel;
  }

  start() {
    this.#makeCar();
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (Validator.isValidateCarName(answer)) {
      this.#carModel.makeCar(answer);
    }
  }
}

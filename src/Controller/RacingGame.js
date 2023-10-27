import Validator from '../../utils/Validator';
import Input from '../View/Input';

export default class RacingGame {
  #carModel;

  #attemps;

  constructor(carModel) {
    this.#carModel = carModel;
  }

  async start() {
    this.#makeCar();
    const answer = await Input.readAttemps();
    if (Validator.isValidateAttemps()) {
      this.#attemps = answer;
      // 레이싱 시작
    }
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (Validator.isValidateCarName(answer)) {
      this.#carModel.makeCar(answer);
    }
  }
}

import { Random } from '@woowacourse/mission-utils';
import Validator from '../../utils/Validator.js';
import Input from '../View/Input.js';

export default class RacingGame {
  #carModel;

  #attemps;

  constructor(carModel) {
    this.#carModel = carModel;
  }

  async start() {
    await this.#makeCar();
    const answer = await Input.readAttemps();
    if (Validator.isValidateAttemps(answer)) {
      this.#attemps = answer;
      this.#racing();
    }
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (Validator.isValidateCarName(answer)) {
      this.#carModel.makeCar(answer);
    }
  }

  #racing() {
    const cars = this.#carModel.getCar();
    while (this.#attemps !== 0) {
      cars.forEach(({ name }) => {
        this.#carModel.updateMove(name, Random.pickNumberInRange(0, 9) >= 4);
      });
      this.#attemps -= 1;
    }
  }
}

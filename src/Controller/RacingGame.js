import { Random } from '@woowacourse/mission-utils';
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

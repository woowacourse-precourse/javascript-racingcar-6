import { Random } from '@woowacourse/mission-utils';
import Validator from '../../utils/Validator.js';
import Input from '../View/Input.js';

export default class RacingGame {
  #carModel;

  #resultModel;

  #attemps;

  constructor(carModel, resultModel) {
    this.#carModel = carModel;
    this.#resultModel = resultModel;
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
    let attemps = this.#attemps;
    while (attemps !== 0) {
      cars.forEach(({ name }) => {
        this.#carModel.updateMove(name, Random.pickNumberInRange(0, 9) >= 4);
      });
      this.#resultModel.addAttempsResult(this.#carModel.getCar());
      attemps -= 1;
    }
  }
}

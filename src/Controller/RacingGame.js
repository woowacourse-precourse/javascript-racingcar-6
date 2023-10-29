import { isValidateCarName, isValidateAttemps } from '../utils/validator.js';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import makeWinner from '../utils/makeWinner.js';
import isMove from '../utils/isMove.js';

export default class RacingGame {
  #carModel;

  #resultModel;

  #attemps;

  constructor(carModel, resultModel) {
    this.#carModel = carModel;
    this.#resultModel = resultModel;
  }

  async run() {
    await this.#makeCar();
    const answer = await Input.readAttemps();
    if (isValidateAttemps(answer)) {
      this.#attemps = answer;
      this.#racing();
      const totalResult = this.#resultModel.makeTotalResult();
      const winners = makeWinner(this.#carModel.getCar());
      Output.printTotalResult(totalResult);
      Output.printWinners(winners);
    }
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (isValidateCarName(answer)) {
      this.#carModel.makeCar(answer);
    }
  }

  #racing() {
    const cars = this.#carModel.getCar();
    let attemps = this.#attemps;
    while (attemps !== 0) {
      cars.forEach(({ name }) => {
        this.#carModel.updateMove(name, isMove());
      });
      this.#resultModel.addAttempsResult(this.#carModel.getCar());
      attemps -= 1;
    }
  }
}

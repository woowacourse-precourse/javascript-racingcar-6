import { isValidateCarName, isValidateAttemps } from '../utils/validator.js';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import isMove from '../utils/isMove.js';
import { DECREASE_RACING_COUNT, RACING_END } from '../constants/racing.js';

export default class RacingGame {
  #carModel;

  #resultModel;

  #winnerModel;

  #attemps;

  constructor(carModel, resultModel, winnerModel) {
    this.#carModel = carModel;
    this.#resultModel = resultModel;
    this.#winnerModel = winnerModel;
  }

  async run() {
    await this.#makeCar();
    const answer = await Input.readAttemps();
    if (isValidateAttemps(answer)) {
      this.#attemps = answer;
      this.#racing();
    }
  }

  #printResult() {
    Output.printTotalResult(this.#resultModel.makeTotalResult());
    Output.printWinners(this.#winnerModel.makeWinner(this.#carModel.getCar()));
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (isValidateCarName(answer)) {
      this.#carModel.makeCar(answer);
    }
  }

  #racing() {
    const cars = this.#carModel.getCar();
    cars.forEach(({ name }) => {
      this.#carModel.updateMove(name, isMove());
    });
    this.#resultModel.addAttempsResult(cars);
    this.#attemps -= DECREASE_RACING_COUNT;

    return this.#attemps === RACING_END ? this.#printResult() : this.#racing();
  }
}

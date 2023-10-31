import { isValidateCarName, isValidateAttemps } from '../utils/validator';
import Input from '../View/Input';
import Output from '../View/Output';
import isMove from '../utils/isMove';
import RACING from '../constants/racing';

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
    Output.printTotalResult(this.#resultModel.makeConsoleOutputTemplete());
    Output.printWinners(this.#winnerModel.makeWinner(this.#carModel.getCar()));
  }

  async #makeCar() {
    const answer = await Input.readCarName();
    if (isValidateCarName(answer)) this.#carModel.makeCar(answer);
  }

  #racing() {
    const cars = this.#carModel.getCar();
    cars.forEach(({ name }) => this.#carModel.updateMove(name, isMove()));
    this.#resultModel.addAttempsResult(cars);
    this.#attemps -= RACING.minusCount;

    return this.#attemps === RACING.end ? this.#printResult() : this.#racing();
  }
}

import CarData from '../model/CarData.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';
import validation from '../utils/validation.js';
import { SPLIT_SEPARATOR } from '../constants/constants.js';

class CarRacing {
  #CarData;

  #moveCount;

  static carNameTrim(input) {
    const carList = input.split(SPLIT_SEPARATOR);
    const splitInput = carList.map((car) => car.trim());
    return splitInput;
  }

  async setCarList() {
    const input = await inputView.CarList();
    const splitInput = CarRacing.carNameTrim(input);

    validation.carNameValidCheck(splitInput);
    this.#CarData = new CarData(splitInput);
  }

  async setMoveCount() {
    const input = await inputView.moveCount();
    validation.moveCountValidCheck(input);
    this.#moveCount = parseInt(input, 10);
  }

  goRace() {
    outputView.raceResultTitle();
    for (let i = 0; i < this.#moveCount; i += 1) {
      const result = this.#CarData.moveCar();
      result.forEach((car) => outputView.raceResult(car.name, car.move));
      outputView.raceResultNewLine();
    }
  }

  awards() {
    const winners = this.#CarData.findWinner();
    outputView.winner(winners);
  }

  async racing() {
    await this.setCarList();
    await this.setMoveCount();
    this.goRace();
    this.awards();
  }
}

export default CarRacing;

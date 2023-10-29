import CarData from "../model/CarData.js";
import inputView from "../view/InputView.js";
import validation from "../utils/validation.js";

class CarRacing {
  #CarData;
  #moveCount;

  constructor() {
    this.#moveCount = 0;
  }

  async setCarList() {
    const input = await inputView.CarList();
    validation.carNameValidCheck(input);
    this.#CarData = new CarData(input.split(","));
  }

  async setMoveCount() {
    const input = await inputView.moveCount();
    validation.moveCountValidCheck(input);
    this.#moveCount = parseInt(input);
  }

  goRace() {
    for (let i = 0; i < this.#moveCount; i++) {
      this.#CarData.moveCar();
    }
  }

  findWinner() {}

  async racing() {
    await this.setCarList();
    await this.setMoveCount();
    this.goRace();
    this.findWinner();
  }
}

export default CarRacing;

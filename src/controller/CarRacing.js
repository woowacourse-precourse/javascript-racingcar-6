import CarData from "../model/CarData.js";
import inputView from "../view/InputView.js";
import validation from "../utils/validation.js";

class CarRacing {
  #CarData;

  async setCarList() {
    const input = await inputView.CarList();
    validation.carNameValidCheck(input);
    this.#CarData = new CarData(input.split(","));
  }

  async getMoveCount() {
    const input = await inputView.moveCount();
    validation.moveCountValidCheck(input);
  }

  goRace() {}

  findWinner() {}

  async racing() {
    await this.setCarList();
    await this.goRace();
  }
}

export default CarRacing;

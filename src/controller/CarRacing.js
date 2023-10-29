import CarData from "../model/CarData.js";
import inputView from "../view/InputView.js";
import outputView from "../view/outputView.js";
import validation from "../utils/validation.js";

class CarRacing {
  #CarData;
  #moveCount;

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
    outputView.raceResultTitle();
    for (let i = 0; i < this.#moveCount; i++) {
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

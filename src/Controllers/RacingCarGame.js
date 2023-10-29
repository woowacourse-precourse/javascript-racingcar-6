import InputView from "../Views/InputView.js";
import Car from "../Models/Car.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
  }

  async setupCars() {
    const carNamesInput = await InputView.promptCarNames();
    Array.from(carNamesInput, (carName) => {
      this.cars.push(new Car(carName));
    });
  }
}

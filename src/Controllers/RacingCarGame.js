import InputView from "../Views/InputView.js";
import Car from "../Models/Car.js";
import OutputView from "../Views/OutputView.js";
import RaceRound from "../Models/RaceRound.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.raceround;
  }

  async setupCars() {
    const carNamesInput = await InputView.promptCarNames();
    Array.from(carNamesInput, (carName) => {
      this.cars.push(new Car(carName));
    });
  }

  async setupRaceRound() {
    const raceround = await InputView.promptRaceRound();
    this.raceround = new RaceRound(raceround).raceRound;
  }
}

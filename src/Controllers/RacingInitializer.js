import { Car } from "../Models/index.js";
import { InputView } from "../Views/index.js";

export default class RacingInitializer {
  static async initializeGame() {
    const cars = await this.initializeCars();
    const raceRound = await this.initializeRaceRound();
    return [cars, raceRound];
  }

  static async initializeCars() {
    const carNamesInput = await InputView.promptCarNames();
    const cars = Array.from(carNamesInput, (carName) => new Car(carName));
    return cars;
  }

  static async initializeRaceRound() {
    const raceround = await InputView.promptRaceRound();
    return raceround;
  }
}

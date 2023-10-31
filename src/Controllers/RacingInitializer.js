import { Car } from "../Models/index.js";
import { InputView } from "../Views/index.js";

export default class RacingInitializer {
  async initializeCars() {
    const carNamesInput = await InputView.promptCarNames();
    const cars = Array.from(carNamesInput, (carName) => {
      new Car(carName);
    });
    return cars;
  }

  async initializeRaceRound() {
    const raceround = await InputView.promptRaceRound();
    return raceround;
  }
}

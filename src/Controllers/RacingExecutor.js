import { OutputView } from "../Views/index.js";

export default class RacingExecutor {
  static runRaces(cars, raceround) {
    OutputView.printResultMessage();

    Array.from({ length: raceround }, () => {
      cars.forEach((car) => car.race());
      OutputView.printOneRound(cars);
    });
  }
}

import { OutputView } from "../Views/index.js";

export default class RacingExecutor {
  static runRaces(cars, raceround) {
    Array.from({ length: raceround }, () => {
      cars.forEach((car) => car.race());
      OutputView.printOneRound(cars);
    });
  }
}

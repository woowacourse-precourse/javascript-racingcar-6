import { OutputView } from "../Views/index.js";

export default class RacingResult {
  static announceWinner(cars) {
    const winner = this.getWinner(cars);
    OutputView.printWinner(winner);
  }

  static getWinner(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.totalDistance));

    const winner = cars
      .filter((car) => car.totalDistance === maxDistance)
      .map((car) => car.name);

    return winner.join(", ");
  }
}

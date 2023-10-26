import { distanceNumber, driveNumber } from "../global/number.js";
import { Random, Console } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  racing() {
    let accumulate = Array(this.cars.length).fill("");
    for (let i = 0; i < this.tryCount; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        let distance = Random.pickNumberInRange(
          distanceNumber.MIN_DISTANCE_LENGTH,
          distanceNumber.MAX_DISTANCE_LENGTH
        );
        if (distance >= driveNumber.MIN_DRIVE_LENGTH) {
          accumulate[j] += "-";
        }
        Console.print(`${this.cars[j]} : ${accumulate[j]}`);
      }
      Console.print("");
    }
    const maxDistance =
      accumulate.length > 0
        ? Math.max(...accumulate.map((str) => str.length))
        : 0;
    let winner = [];
    for (let i = 0; i < this.cars.length; i++) {
      if (accumulate[i].length === maxDistance) winner.push(this.cars[i]);
    }
    return winner;
  }
}

export default RacingGame;

import { distanceNumber, driveNumber } from "../global/number.js";
import { Random, Console } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  generateRandomNum() {
    let distance = Random.pickNumberInRange(
      distanceNumber.MIN_DISTANCE_LENGTH,
      distanceNumber.MAX_DISTANCE_LENGTH
    );
    return distance;
  }

  addDistance(cars, accumulate) {
    for (let car = 0; car < this.cars.length; car++) {
      let distance = this.generateRandomNum();
      accumulate[car] += distance >= driveNumber.MIN_DRIVE_LENGTH ? "-" : "";
      Console.print(`${this.cars[car]} : ${accumulate[car]}`);
    }
    return accumulate;
  }

  racing() {
    let accumulate = Array(this.cars.length).fill("");
    for (let i = 0; i < this.tryCount; i++) {
      accumulate = this.addDistance(this.cars, accumulate);
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

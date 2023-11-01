import { distanceNumber, driveNumber } from "./number.js";
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

  isNumberAboveMininum() {
    let distance = this.generateRandomNum();
    if (distance >= driveNumber.MIN_DRIVE_LENGTH) return "-";
  }

  addDistance(cars, accumulateDistance) {
    for (let car = 0; car < cars.length; car++) {
      accumulateDistance[car] += this.isNumberAboveMininum();
      Console.print(`${cars[car]} : ${accumulateDistance[car]}`);
    }
    return accumulateDistance;
  }

  chooseWinner(cars, accumulateDistance, maxDistance) {
    let winner = [];
    for (let i = 0; i < cars.length; i++) {
      if (accumulateDistance[i].length === maxDistance) winner.push(cars[i]);
    }
    return winner;
  }

  racing() {
    let accumulateDistance = Array(this.cars.length).fill("");
    for (let i = 0; i < this.tryCount; i++) {
      accumulateDistance = this.addDistance(this.cars, accumulateDistance);
      Console.print("");
    }
    const maxDistance =
      accumulateDistance.length > 0
        ? Math.max(...accumulateDistance.map((str) => str.length))
        : 0;
    let winner = this.chooseWinner(this.cars, accumulateDistance, maxDistance);
    return winner;
  }
}

export default RacingGame;

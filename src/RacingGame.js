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

  chooseWinner(cars, carsDistance, maxDistance) {
    let winners = [];
    for (let i = 0; i < cars.length; i++) {
      if (carsDistance[i].length === maxDistance) winners.push(cars[i]);
    }
    return winners;
  }

  racing() {
    // 누적 거리를 의미하는 변수이며, "-"가 누적되는 문자열이다.
    let accumulateDistance = Array.from({ length: this.cars.length }, () => "");
    for (let i = 0; i < this.tryCount; i++) {
      accumulateDistance = this.addDistance(this.cars, accumulateDistance);
      Console.print("");
    }
    // 누적 거리를 의미하는 변수이며, 숫자로 표현되는 배열이다.
    const carsDistance = accumulateDistance.map((distance) => distance.length);
    const maxDistance = Math.max(0, ...carsDistance);

    let winners = this.chooseWinner(this.cars, carsDistance, maxDistance);
    return winners;
  }
}

export default RacingGame;

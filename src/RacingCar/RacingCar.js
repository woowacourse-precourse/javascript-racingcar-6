import { Console, Random } from "@woowacourse/mission-utils";

import { MESSAGE } from "../constants.js";
import Car from "./Car.js";

class RacingCar {
  async start() {
    const name = await Console.readLineAsync(MESSAGE.enterCarName);
    const splitedName = this.splitName(name);
    const cars = this.createCarArray(splitedName);
    const numOfRacing = await Console.readLineAsync(
      MESSAGE.enterNumberOfRacing
    );

    Console.print("\n실행 결과");

    for (let i = 0; i < numOfRacing; i++) {
      let result = "";
      cars.forEach((car) => {
        if (this.movingForward()) car.move();

        const strDistance = this.convertDistanceToString(car.distance);
        result += `${car.name} : ${strDistance}\n`;
      });
      Console.print(result);
    }

    const winners = this.pickWinner(cars);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }

  createCarArray(nameArray) {
    let cars = [];
    nameArray.forEach((name) => cars.push(new Car(name)));

    return cars;
  }

  splitName(name) {
    return name.split(",");
  }

  movingForward() {
    const randomNum = Random.pickNumberInRange(0, 9);

    if (randomNum >= 4) return true;
    return false;
  }

  convertDistanceToString(distance) {
    let str = "";
    for (let j = 0; j < distance; j++) {
      str += "-";
    }

    return str;
  }

  pickWinner(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.distance));
    const winners = cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);

    return winners;
  }
}

export default RacingCar;

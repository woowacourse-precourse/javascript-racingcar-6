import { Console, Random } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE, MESSAGE } from "../constants.js";
import Car from "./Car.js";
import Message from "../Message.js";

class RacingCar {
  async start() {
    const name = await Console.readLineAsync(MESSAGE.enterName);
    const splitedName = this.splitName(name.trim());
    const cars = this.createCarArray(splitedName);
    const numOfRacing = await Console.readLineAsync(
      MESSAGE.enterNumberOfRacing
    );

    Message.logIf(
      !this.isValidNumber(numOfRacing),
      ERROR_MESSAGE.notValidNumber
    );

    Console.print("\n실행 결과");

    let result = "";
    for (let i = 0; i < parseInt(numOfRacing); i++) {
      cars.forEach((car) => {
        if (this.movingForward()) car.move();
        result += `${car.name} : ${car.distance}\n`;
      });
      result += "\n";
    }
    Console.print(result);

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

  pickWinner(cars) {
    const maxDistanceLength = Math.max(
      ...cars.map((car) => car.distance.length)
    );
    const winners = cars
      .filter((car) => car.distance.length === maxDistanceLength)
      .map((car) => car.name);

    return winners;
  }

  isValidNumber(num) {
    return /^[1-9]\d*$/.test(num);
  }
}

export default RacingCar;

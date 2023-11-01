import { Console } from "@woowacourse/mission-utils";

import { MESSAGE } from "../constants.js";

class Winner {
  constructor(cars) {
    this.name = this.pickFrom(cars);
  }

  print() {
    Console.print(`${MESSAGE.winner}: ${this.name.join(", ")}`);
  }

  pickFrom(cars) {
    const maxDistanceLength = Math.max(
      ...cars.map((car) => car.distance.length)
    );
    const nameArray = cars
      .filter((car) => car.distance.length === maxDistanceLength)
      .map((car) => car.name);

    return nameArray;
  }
}

export default Winner;

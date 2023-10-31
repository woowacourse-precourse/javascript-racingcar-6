import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  static reportDistance(...cars) {
    let carDistances = cars.reduce((acc, car) => {
      if (acc[car.name]) {
        acc[car.name] += car.distance;
      } else {
        acc[car.name] = car.distance;
      }
      return acc;
    }, {});

    for (let key in carDistances) {
      MissionUtils.Console.print(`${key} : ` + "-".repeat(carDistances[key]));
    }
    return carDistances;
  }
  static addDistance(car) {
    car.distance += 1;
  }
}

class App {
  async play() {}
}

export default App;

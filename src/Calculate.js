import { SEPARATOR } from "./constant/rule.js";

class Calculate {
  constructor(carInstanceArray) {
    this.max = 0;
    this.winners = [];
    this.cars = carInstanceArray;
  }

  calcWinners() {
    this.cars.forEach((car) => {
      this.compareEachResult(car);
    });
  }

  compareEachResult(car) {
    const [name, finalResult] = car.getCurrentCarState();

    if (finalResult.length === this.max) {
      this.winners.push(name);
    }

    if (finalResult.length > this.max) {
      this.max = finalResult.length;
      this.winners = [name];
    }
  }

  getWinners() {
    return this.winners.join(SEPARATOR.WINNERS);
  }
}

export default Calculate;

import { Console } from "@woowacourse/mission-utils";

class Race {
  constructor(cars, totalRounds) {
    this.cars = cars;
    this.totalRounds = totalRounds;
  }

  start() {
    for (let round = 0; round < this.totalRounds; round++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResult();
    }
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.log(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getWinners() {
    return this.cars.filter(
      (car) => car.getPosition() === this.getMaxPosition()
    );
  }
}

export default Race;

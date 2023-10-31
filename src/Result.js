import { COMMAS } from './constants/constants';

class Result {
  constructor(carArray) {
    this.max = 0;
    this.winners = [];
    this.cars = carArray;
  }

  findWinners() {
    this.cars.forEach(car => {
      this.compareResult(car);
    });

    return this;
  }

  compareResult(car) {
    const [name, finalResult] = car.getCarScore();

    if (finalResult.length === this.max) {
      this.winners.push(name);
    }

    if (finalResult.length > this.max) {
      this.max = finalResult.length;
      this.winners = [name];
    }
  }

  joinWinners() {
    return this.winners.join(COMMAS.SYMBOL);
  }
}

export default Result;

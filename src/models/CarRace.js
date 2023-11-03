import { NUMBER } from '../utils/Constant.js';

class CarRace {
  #randomGenerator;
  constructor(generator) {
    this.#randomGenerator = generator;
  }

  checkPosition(carPosition, attempts) {
    carPosition.forEach((_, carName) => {
      carPosition.set(carName, this.getForwardCount(Number(attempts)));
    });
    return carPosition;
  }

  getForwardCount(attempts) {
    let count = 0;
    for (let i = 0; i < attempts; i += 1) {
      count = this.gainPower(count);
    }
    return count;
  }

  gainPower(count) {
    const power = this.#randomGenerator.generate();
    if (power >= NUMBER.RANDOM) {
      count += 1;
    }
    return count;
  }

  getWinner(forwards) {
    const maxValue = Math.max(...forwards.values());
    const winners = [];

    forwards.forEach((value, carName) => {
      if (value === maxValue) {
        winners.push(carName);
      }
    });
    return winners.join(', ');
  }
}

export default CarRace;

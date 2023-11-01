import Car from '../models/car.js';
import getRandomDigit from '../utils/random.js';
import GAME_OPTION from '../constants/gameOption.js';

class CarService {
  #carList;

  #highestForwardCount;

  constructor() {
    this.#carList = [];
    this.#highestForwardCount = 0;
  }

  addCar(carName) {
    const newCar = new Car(carName);
    this.#carList.push(newCar);
  }

  getCarList() {
    return this.#carList.map((car) => ({
      carName: car.getCarName(),
      forwardCount: car.getForwardCount(),
    }));
  }

  race() {
    this.#carList.forEach((car) => {
      const isForward = getRandomDigit() >= GAME_OPTION.FORWARD_CONDITION_TO;
      if (isForward) {
        car.forward();
      }

      const forwardCount = car.getForwardCount();
      if (forwardCount > this.#highestForwardCount) {
        this.#highestForwardCount = forwardCount;
      }
    });
  }

  getWinnerList() {
    const winnerList = this.getCarList()
      .filter((car) => car.forwardCount === this.#highestForwardCount)
      .map((winner) => winner.carName);

    return winnerList;
  }
}

export default CarService;

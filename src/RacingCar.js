import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import View from './View.js';
import { Sign, Value } from './constants/constants.js';

class RacingCar {
  #carList;
  #view;

  constructor() {
    this.#carList = [];
    this.#view = new View();
  }

  async start() {
    await this.setCarList();
    const times = await this.getRepeatTime();
    this.repeatMoveOrStop(times);
  }

  async setCarList() {
    const carArr = await this.#view.inputCarNames();
    this.#carList = carArr.map((car) => new Car(car, Value.INITIAL_DISTANCE));
  }

  async getRepeatTime() {
    const input = await this.#view.inputRepeatNumber();
    return input;
  }

  repeatMoveOrStop(input) {
    for (let i = 0; i < input; i++) {
      this.determineMoveByRandom();
      this.printCarsDistance();
    }
    this.chooseWinner();
  }

  determineMoveByRandom() {
    this.#carList.forEach((car) => {
      const randNum = Random.pickNumberInRange(
        Value.MIN_NUMBER,
        Value.MAX_NUMBER,
      );
      if (randNum >= Value.NEXT_MOVE_CONDITION) {
        car.moveForward();
      }
    });
  }

  printCarsDistance() {
    this.#carList.forEach((car) => {
      this.#view.printCarResult(car.getName(), car.getDistance());
    });
  }

  chooseWinner() {
    const allDistance = this.#carList.map((car) => car.getDistance());
    const maxDistance = Math.max(...allDistance);
    const winners = this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());

    this.#view.printWinners(winners);
  }
}

export default RacingCar;

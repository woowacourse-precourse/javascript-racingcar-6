import { Random } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import View from '../view/View.js';
import { VALUE } from '../constants/constants.js';

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
    this.chooseWinner();
  }

  async setCarList() {
    const carArr = await this.#view.inputCarNames();
    this.#carList = carArr.map((car) => new Car(car, VALUE.INITIAL_DISTANCE));
  }

  async getRepeatTime() {
    const input = await this.#view.inputRepeatNumber();
    return input;
  }

  repeatMoveOrStop(input) {
    let cnt = 0;
    while (cnt < input) {
      this.#view.printSpace();
      this.determineMoveByRandom();
      this.printCarsDistance();

      cnt += 1;
    }
  }

  determineMoveByRandom() {
    this.#carList.forEach((car) => {
      const randNum = Random.pickNumberInRange(
        VALUE.MIN_NUMBER,
        VALUE.MAX_NUMBER,
      );
      if (randNum >= VALUE.NEXT_MOVE_CONDITION) {
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

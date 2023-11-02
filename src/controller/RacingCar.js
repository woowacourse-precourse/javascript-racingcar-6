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
    const repeat = await this.getRepeatTime();
    this.repeatMoveOrStop(repeat);
    this.chooseWinner();
  }

  async setCarList() {
    const nameList = await this.#view.inputCarNames();
    this.#carList = nameList.map((car) => new Car(car, VALUE.INITIAL_DISTANCE));
  }

  async getRepeatTime() {
    const repeat = await this.#view.inputRepeatNumber();
    return repeat;
  }

  repeatMoveOrStop(repeat) {
    let cnt = 0;
    while (cnt < repeat) {
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

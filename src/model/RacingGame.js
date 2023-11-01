import { MissionUtils } from "@woowacourse/mission-utils";
import { StaticChar, StaticNumber } from "../model/Constant.js";
class RacingGame {
  #racingCars = {};
  #attempt;

  constructor(cars) {
    cars
      .split(StaticChar.CAR_NAME_SPLIT)
      .forEach((key) => (this.#racingCars[key] = StaticChar.CAR_NAME_BLANK));
  }

  setRacingAttempt(attempt) {
    this.#attempt = attempt;
  }

  get getRacingCarsName() {
    return Object.keys(this.#racingCars);
  }

  get getRacingAttempt() {
    return this.#attempt;
  }

  get getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  get isMove() {
    if (this.getRandomNumber >= StaticNumber.CONDITION_MOVE) {
      return 1;
    }
    return 0;
  }

  move(car) {
    if (this.isMove) {
      this.#racingCars[car] += StaticChar.CAR_DISTANCE;
    }
    return this.#racingCars[car].length;
  }

  get raceScore() {
    const result = {};
    Object.keys(this.#racingCars).forEach((car) => {
      const score = this.move(car);
      result[car] = score;
    });
    return result;
  }
}

export default RacingGame;

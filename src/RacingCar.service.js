import { Random } from '@woowacourse/mission-utils';
import { RANDOM_RANGE, THRESHOLD, MOVE } from './constants.js';
import { IOController } from './io/IO.controller.js';

export default class RacingCarService {
  #IOController;

  constructor() {
    this.#IOController = new IOController();
  }

  async racingCarQuery() {
    const RACING_CAR_NAMES = await this.#IOController.readCarName(); // string[]
    const RACING_CAR_TRIES = await this.#IOController.readCarTries(); // number
    const progress = RACING_CAR_NAMES.reduce((acc, car) => {
      acc[car] = '';
      return acc;
    }, {});
    this.play(progress, RACING_CAR_NAMES, RACING_CAR_TRIES);
  }

  pickRandomNumber() {
    return Random.pickNumberInRange(RANDOM_RANGE.min, RANDOM_RANGE.max);
  }

  play(progress, cars, tries) {
    this.#IOController.printResultIntro();
    for (let i = 0; i < tries; ++i) {
      cars.forEach((car) => {
        progress[car] += this.pickRandomNumber() >= THRESHOLD ? MOVE : '';
      });

      cars.forEach((car, index) => {
        const IS_LAST = index === cars.length - 1;
        this.#IOController.printCurrentResult(car, progress[car], IS_LAST);
      });
    }
    this.#IOController.printFinalResult(progress);
  }
}

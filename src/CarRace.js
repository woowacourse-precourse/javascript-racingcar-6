import Car from './Car';
import { MissionUtils } from '@woowacourse/mission-utils';
import { SETTING, SCORE } from './constants';
import { printMessage } from './utils';

export default class CarRace {
  constructor(carNames, count) {
    /** @type Array<Car> */
    this.carNames = carNames.map((name) => new Car(name));
    /** @type number */
    this.count = count;
  }

  isPlaying() {
    return this.count > 0;
  }

  getRandomNumber() {
    const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } = SETTING;
    return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  }
  
  isforwardNumber(num) {
    const { TARGET_FORWARD_NUMBER } = SETTING;
    return num >= TARGET_FORWARD_NUMBER;
  }

  calculateResult() {
    this.carNames.forEach((car) => {
      const random = this.getRandomNumber();
      if (this.isforwardNumber(random)) {
        car.forward();
      }
    });
    this.count -= 1;
  }
  
  getResultMessage() {
    const { FORWARD } = SCORE;
    this.carNames.forEach((car) => {
      printMessage(`${car.name} : ${FORWARD.repeat(car.position)}`);
    });
    printMessage('\n');
  }
}
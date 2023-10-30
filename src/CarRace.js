import Car from './Car';
import { MissionUtils } from '@woowacourse/mission-utils';
import { SETTING, SCORE, MESSAGE } from './constants';

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
    const message = [];
    const { FORWARD } = SCORE;
    this.carNames.forEach((car) => {
      message.push(`${car.name} : ${FORWARD.repeat(car.position)}`);
    });
    message.push('\n');
    return message.join('\n');
  }

  getWinner() {
    const max = Math.max(...this.carNames.map(car => car.position));
    const winners = this.carNames
      .filter((car) => car.position === max)
      .map((car) => car.name);
    return winners;
  }

  getWinnerMessage() {
    const message = [];
    const { WINNER } = MESSAGE;
    const winners = this.getWinner().join(',');
    message.push(`${WINNER}${winners}`);
    return message.join('');
  }
}
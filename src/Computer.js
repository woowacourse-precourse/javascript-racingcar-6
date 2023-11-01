import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, RULES } from './constants';
import { goOneStep } from './utils';
import User from './User';
import RacingCar from './RacingCar';

export default class Computer {
  static createComputer() {
    return new this();
  }

  async init() {
    const { racingCarArray, trialCount } =
      await User.createUser().requestInputUser();
    this.racingCars = racingCarArray.map(name =>
      RacingCar.createRacingCar(name),
    );
    this.trialCount = trialCount;
  }

  async playGame() {
    Console.print(GAME_MESSAGE.startOfResult);
    let count = 0;
    while (count < this.trialCount) {
      this.calRacing();
      this.printRacing();
      count += 1;
    }
    this.evalRacing();
  }

  calRacing() {
    this.racingCars.forEach(car => {
      if (goOneStep()) car.goAhead();
    });
  }

  printRacing() {
    this.racingCars.forEach(({ name, position }) => {
      let count = 0;
      let racingState = '';
      while (count < position) {
        racingState += GAME_MESSAGE.charOfPostion;
        count += 1;
      }
      Console.print(`${name} : ${racingState}`);
    });
    Console.print('');
  }

  evalRacing(racingCars = this.racingCars) {
    const arr = racingCars.map(({ position }) => position);
    const max = Math.max(...arr);
    const result = racingCars
      .filter(({ position }) => max === position)
      .map(({ name }) => name)
      .join(`${RULES.seperator} `);
    Console.print(GAME_MESSAGE.endOfResult + result);
    return result;
  }
}

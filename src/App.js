import { Random, Console } from '@woowacourse/mission-utils';
import {
  CAR,
  REQUEST_MESSAGE,
  VALIDATION_ERRORS_MESSAGE,
} from './Constants.js';

class App {
  async play() {
    const carNames = await this.getCarNames();
    const gameCount = await this.getGameCount();

    Console.print('실행결과');
    this.raceGame(carNames, gameCount);
  }

  async getCarNames() {
    const carNames = await Console.readLineAsync(REQUEST_MESSAGE.CAR_NAMES);
    const carNamesArr = carNames.split(',');
    carNamesArr.forEach((carName) => this.validateCarName(carName));

    return carNamesArr;
  }

  validateCarName(carName) {
    if (!carName) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (!/^[A-Za-z]+$/.test(carName))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_STRING);
    if (carName.length >= 5)
      throw new Error(VALIDATION_ERRORS_MESSAGE.OVER_THE_RANGE);
  }

  async getGameCount() {
    const gameCount = await Console.readLineAsync(REQUEST_MESSAGE.GAME_COUNT);
    this.validateGameCount(gameCount);
    return gameCount;
  }

  validateGameCount(gameCount) {
    if (!gameCount) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (Number.isNaN(gameCount))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_NUMBER);
  }

  raceGame(carNames, gameCount) {
    const gameProgress = {};
    carNames.forEach((carName) => {
      gameProgress[carName] = '';
    });

    for (let i = 0; i < gameCount; i++) {
      carNames.forEach((carName) => {
        gameProgress[carName] += this.moveOrStop();
        Console.print(`${carName} : ${gameProgress[carName]}`);
      });
    }
    this.chooseWinner(gameProgress);
  }

  moveOrStop() {
    const number = Random.pickNumberInRange(0, 9);
    return number >= 4 ? CAR.MOVING_FORWARD : CAR.STOP;
  }

  chooseWinner(gameProgress) {
    let maxMove = 0;
    let winnerArr = [];

    Object.entries(gameProgress).forEach(([key, value]) => {
      const currentMove = value.length;

      if (currentMove > maxMove) {
        maxMove = currentMove;
        winnerArr = [key];
      } else if (currentMove === maxMove) {
        winnerArr.push(key);
      }
    });

    Console.print(`최종우승자 : ${winnerArr.join(', ')}`);
  }
}

export default App;

import { Console, MissionUtils } from '@woowacourse/mission-utils';
import * as error from './Error.js';

class App {
  async play() {
    await this.getRacingCarName();
  }

  async getRacingCarName() {
    try {
      let racingCar = new Map();

      const racingCarNameInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      racingCarNameInput.split(',').forEach((name) => {
        racingCar.set(name, 0);
      });

      await this.checkRacingCarNameInputError(racingCar);
      await this.getTryCount(racingCar);
    } catch (error) {
      throw error;
    }
  }

  async getTryCount(racingCar) {
    try {
      let tryCnt = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      await this.checkTryCountError(parseInt(tryCnt, 10));
      await this.playRacingCarGame(racingCar, parseInt(tryCnt, 10));
    } catch (error) {
      throw error;
    }
  }

  async checkRacingCarNameInputError(racingCar) {
    racingCar.forEach((value, key) => {
      if (key === '') throw Error(error.INPUT_CAR_NULL_ERROR_MESSAGE);
      if (key.length > 5)
        throw Error(error.INPUT_CAR_OVER_LENGTH_ERROR_MESSAGE);
    });
  }

  async checkTryCountError(tryCnt) {
    if (tryCnt === '' || tryCnt === null)
      throw Error(error.INPUT_CNT_NULL_ERROR_MESSAGE);
    if (tryCnt === 0) throw Error(error.INPUT_CNT_ZERO_ERROR_MESSAGE);
    if (!/[1-9]/.test(tryCnt))
      throw Error(error.INPUT_CNT_NOT_NUMBER_ERROR_MESSAGE);
  }

  async playRacingCarGame(racingCar, tryCnt) {
    Console.print('실행 결과');

    while (tryCnt--) {
      racingCar.forEach((value, key) => {
        this.printForwardSign(racingCar, key);
      });
      Console.print('\n');
    }
    await this.chooseWinner(racingCar);
  }

  printForwardSign(racingCar, key) {
    let forwardSign = '';
    let randomForwardVal = MissionUtils.Random.pickNumberInRange(0, 9);

    for (let i = 0; i < randomForwardVal; i++) {
      forwardSign += '-';
    }
    Console.print(`${key} : ${forwardSign}`);

    if (randomForwardVal >= 4)
      racingCar.set(key, racingCar.get(key) + randomForwardVal);
  }

  async chooseWinner(racingCar) {
    let winnerList = [...racingCar.entries()].reduce((prev, current) =>
      prev[1] > current[1] ? prev : current
    )[0];

    racingCar.forEach((value, key) => {
      if (racingCar.get(winnerList) === value && winnerList !== key)
        winnerList += `, ${key}`;
    });

    Console.print('최종 우승자 : ' + winnerList);
  }
}

export default App;

import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Message';
import { checkCarNames, checkTryNumber, checkRandomNumber } from './Validation';
class App {
  async play() {
    const winner = await this.carRacingGame();
  }

  // 자동차 경주 시작
  async carRacingGame() {
    try {
      const carNames = await this.getCarNames();
      const tryNumber = await this.getTryNumber();

      const carList = this.getCarList(carNames);

      Console.print(GAME_MESSAGE.EXECUTE_REULT);
      for (let i = 0; i < Number(tryNumber); i++) {
        Console.print(this.moveCar(carList));
      }
    } catch (e) {
      throw e;
    }
  }

  async getCarNames() {
    const carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAME);
    checkCarNames(carNames);
    return carNames;
  }

  async getTryNumber() {
    const tryNumber = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_TRY_NUMBER,
    );
    checkTryNumber(tryNumber);
    return tryNumber;
  }

  getCarList(carNames) {
    let carList = {};
    carNames.split(',').forEach(carName => {
      carList[carName] = '';
    });
    return carList;
  }

  moveCar(carList) {
    let executeResult = '';
    for (const car in carList) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (checkRandomNumber(randomNumber)) {
        carList[car] += '-';
      }
      executeResult += car + ' : ' + carList[car] + '\n';
    }
    return executeResult;
  }
}

export default App;

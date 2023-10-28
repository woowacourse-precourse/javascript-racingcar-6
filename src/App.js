import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Message';
import { checkCarNames, checkTryNumber, checkRandomNumber } from './Validation';
class App {
  async play() {
    await this.carRacingGame();
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

      const winnerArr = this.getWinnerArr(carList);

      Console.print(GAME_MESSAGE.GAME_WINNER + winnerArr.join(','));
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

  getMaxDistance(carList) {
    let maxDistance = 0;
    for (const distance of Object.values(carList)) {
      if (distance.length > maxDistance) maxDistance = distance.length;
    }
    return maxDistance;
  }

  getWinnerArr(carList) {
    let winnerArr = [];
    const maxDistance = this.getMaxDistance(carList);
    for (const [car, distance] of Object.entries(carList)) {
      if (distance.length === maxDistance) winnerArr.push(car);
    }
    return winnerArr;
  }
}

export default App;

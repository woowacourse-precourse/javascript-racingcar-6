import { Console } from '@woowacourse/mission-utils';
import ErrorHandler from './ErrorHandler';

class RacingGameInputManager {
  constructor() {
    this.racingCars = [];
    this.playCount = 0;
  }

  async getRacingCars() {
    const carName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNameList = carName.split(',');
    ErrorHandler.validateRacingCarName(carNameList);
    return this.initializeRacingCars(carNameList);
  }

  initializeRacingCars(carNameList) {
    carNameList.forEach((list, index) => {
      this.racingCars[index] = { carName: list, score: 0 };
    });
    return this.racingCars;
  }
}

export default RacingGameInputManager;

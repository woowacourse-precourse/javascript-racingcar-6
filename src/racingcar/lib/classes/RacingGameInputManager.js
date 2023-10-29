import { Console } from '@woowacourse/mission-utils';
import ErrorHandler from './ErrorHandler';

class RacingGameInputManager {
  constructor() {
    this.racingInfo = { racingCars: [], playCount: 0 };
    this.racingCars = [];
    this.playCount = 0;
  }

  async getRacingInfo() {
    this.racingInfo.racingCars = await this.getRacingCars();
    this.racingInfo.playCount = await this.getPlayCount();
    return this.racingInfo;
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

  async getPlayCount() {
    this.playCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    ErrorHandler.validatePlayCount(this.playCount);
    return this.playCount;
  }
}

export default RacingGameInputManager;

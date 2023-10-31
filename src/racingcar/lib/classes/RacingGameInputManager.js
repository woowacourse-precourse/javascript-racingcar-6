import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages';
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
    const carName = await Console.readLineAsync(INPUT_MESSAGE.INPUT_CAR_NAME);
    ErrorHandler.validateInput(carName);
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
    this.playCount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PLAY_NUM);
    ErrorHandler.validatePlayCount(this.playCount);
    return this.playCount;
  }
}

export default RacingGameInputManager;

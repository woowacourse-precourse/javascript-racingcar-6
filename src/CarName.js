import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Play from './Play.js';

class CarName {
  checkNumberDigits(carNames) {
    const carNamesInArray = carNames.split(',');
    const deleteSameNameInArray = new Set(carNamesInArray);
    const sameNameCheck = deleteSameNameInArray.size !== carNamesInArray.length;
    const hasConsecutiveCommas = /,,/.test(carNames);
    const startCommaOrEndComma = /^,|,$/.test(carNames);

    if (sameNameCheck) {
      throw new Error('[ERROR] 서로다른 이름을 입력하세요');
    }

    if (startCommaOrEndComma) {
      throw new Error('[ERROR] 콤마로 시작하거나 콤마로 끝나면 안됩니다.');
    }

    if (hasConsecutiveCommas) {
      throw new Error('[ERROR] 콤마를 두 번 이상 연속으로 사용하면 안됩니다.');
    }

    const carList = carNamesInArray.map((carName) => {
      const moreThan5Characters = carName.length > 5;

      if (moreThan5Characters) {
        throw new Error('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');
      }

      return new Car(carName);
    });

    const play = new Play();
    play.enterNumberOfTimes(carList);
  }

  checkEmty(carNames) {
    const hasEmty = carNames.includes(' ') || carNames.length === 0;

    if (hasEmty) {
      throw new Error('[ERROR] 빈공간이 없이 작성해주세요.');
    }

    this.checkNumberDigits(carNames);
  }

  async start() {
    MissionUtils.Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNames = await MissionUtils.Console.readLineAsync('');
    this.checkEmty(carNames);
  }
}

export default CarName;

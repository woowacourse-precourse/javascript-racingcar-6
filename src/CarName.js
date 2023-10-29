import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Play from './Play.js';

class CarName {
  checkNumberDigits(carNames) {
    const carNamesInArray = carNames.split(',');

    const carList = carNamesInArray.map((carName) => {
      const moreThan5Characters = carName.length > 5;

      if (moreThan5Characters) {
        throw new Error('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');
      }
      // 같은이름 검사기능 추가하기
      return new Car(carName);
    });

    const play = new Play();
    play.enterNumberOfTimes(carList);
  }

  checkComma(carNames) {
    const hasComma = carNames.includes(',');
    const hasEmty = carNames.includes(' ');

    if (hasComma) {
      this.checkNumberDigits(carNames);
    }

    if (!hasComma) {
      throw new Error('[ERROR] 쉼표(,)를 사용해 이름을 구분 하세요.');
    }

    if (hasEmty) {
      throw new Error('[ERROR] 빈공간이 없이 작성해주세요.');
    }
  }

  async start() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNames = await Console.readLineAsync('');
    this.checkComma(carNames);
  }
}

export default CarName;

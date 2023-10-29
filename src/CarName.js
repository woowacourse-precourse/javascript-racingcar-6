import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';
import Play from './play.js';

class CarName {
  checkNumberDigits(carNames) {
    const carNamesInArray = carNames.split(',');

    const carList = carNamesInArray.map((carName) => {
      const MORE_THAN_5_CHARACTERS = carName.length > 5;

      if (MORE_THAN_5_CHARACTERS) {
        throw new Error('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');
      }
      // 같은이름 검사기능 추가하기
      return new Car(carName);
    });

    const play = new Play();
    play.횟수입력(carList);
  }

  checkComma(carNames) {
    const HAS_COMMA = carNames.includes(',');
    const HAS_EMTY = carNames.includes(' ');

    if (HAS_COMMA) {
      this.checkNumberDigits(carNames);
    }

    if (!HAS_COMMA) {
      throw new Error('[ERROR] 쉼표(,)를 사용해 이름을 구분 하세요.');
    }

    if (HAS_EMTY) {
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

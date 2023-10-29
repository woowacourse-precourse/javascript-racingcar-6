import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';

class Game {
  constructor() {}
  자리수검사(carNames) {
    const carNamesInArray = carNames.split(',');
    const carList = carNamesInArray.map((e) => {
      if (e.length > 5) {
        throw new Error('[ERROR] 5자리수 이하');
      }
      // 같은이름 검사기능
      return new Car(e);
    });
    //시도횟수입력으로 이동
  }

  콤마점검(carNames) {
    if (!carNames.includes(',')) {
      throw new Error('[ERROR] 콤마없음');
    }
    if (carNames.includes(',')) {
      this.자리수검사(carNames);
    }
    if (carNames.includes(' ')) {
      throw new Error('[ERROR] 빈공간있음');
    }
  }

  async start() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNames = await Console.readLineAsync('');
    this.콤마점검(carNames);
  }
}

export default Game;

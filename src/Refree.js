import { Random } from '@woowacourse/mission-utils';
import { KOREAN_BAD_WORD } from './db/badWordDB.js';
import Car from './Car.js';

class Refree {
  #carRegistry = new Map();

  registerCars(carNames) {
    this.#checkBadWord(carNames);
    carNames.forEach((car) => this.#carRegistry.set(car, new Car(car)));
  }

  #checkBadWord(carNames) {
    const result = [];

    carNames.forEach((carName) => {
      if (KOREAN_BAD_WORD.some((badWord) => carName.includes(badWord))) result.push(carName);
    });

    if (result.length) {
      throw new Error(`[ERROR] 자동차 이름에 ${result.join(',')}을 사용할 수 없습니다.`);
    }
  }

  moveCars() {
    this.#carRegistry.forEach((carInstance) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) carInstance.move(1);
      if (randomNumber < 4) carInstance.stop();
    });
  }

  getRecordResultList() {
    const result = [];
    this.#carRegistry.forEach((carInstance) => result.push(carInstance.record()));
    return result;
  }

  getWinner() {
    const resultList = this.getRecordResultList();
    const max = Math.max(...resultList.map(([_, position]) => position));
    const winner = resultList.filter(([_, position]) => position === max).map(([name, _]) => name);
    return winner;
  }
}

export default Refree;

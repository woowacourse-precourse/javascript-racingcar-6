import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class InputCars {
  async createCars() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNames = input.split(',');

    this.#validateCarNames(carNames);

    return carNames.map(name => new Car(name));
  }

  #validateCarNames(carNames) {
    if (carNames.some(name => name.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
    }

    if (carNames.some(name => name !== name.trim())) {
      throw new Error('[ERROR] 자동차 이름 양 끝에 공백이 있습니다.');
    }

    if (carNames.some(name => /\s/.test(name))) {
      throw new Error('[ERROR] 자동차 이름에 공백이 포함되어 있습니다.');
    }
  }
}

export default InputCars;

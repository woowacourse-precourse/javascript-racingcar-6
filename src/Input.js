import { Console } from '@woowacourse/mission-utils';

class Input {
  constructor() {
    this.carSet = {};
  }

  async startInput() {
    await this.inputCars();
    return this.carSet;
  }

  async inputCars() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    await this.checkValidation(carNames);
  }

  async checkValidation(carNames) {
    if (
      !(
        /^[\w\s]{1,5}(?:,[\w\s]{1,5})*$/.test(carNames) ||
        /^[\w\s]{1,5}$/.test(carNames)
      )
    ) {
      throw new Error('유효하지 않은 입력');
    }
    const carNumber = carNames.split(',').length;
    if (carNumber !== new Set(carNames.split(',')).size) {
      throw new Error('중복된 유저 입력');
    }
    this.carSet = {
      carNames,
      carNumber,
    };
  }
}

export default Input;

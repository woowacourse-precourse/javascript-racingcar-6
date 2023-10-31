import { Console } from '@woowacourse/mission-utils';

class Input {
  async getCarName() {
    try {
      const userInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      const carArr = userInput.split(',').map(carName => carName.trim());
      this.validateGetCarName(carArr);
      return carArr;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateGetCarName(carArr) {
    if (carArr.length === 0 || carArr.some(carName => carName.length === 0)) {
      throw new Error(
        '[ERROR] 자동차 이름이 입력되지 않았거나 빈 공백이 포함되어 있습니다.',
      );
    }
    if (carArr.some(carName => carName.length > 5)) {
      throw new Error('[ERROR] 자동차 이름이 5글자를 초과했습니다.');
    }
  }

  async getRepeatNumber() {
    try {
      const inputNumber =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      this.validateGetRepeatNumber(inputNumber);
      return inputNumber;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateGetRepeatNumber(inputNumber) {
    if (inputNumber === '') {
      throw new Error('[ERROR] 시도 횟수가 입력되지 않았습니다.');
    }

    const parsedNumber = parseFloat(inputNumber);
    if (
      isNaN(parsedNumber) ||
      !Number.isInteger(parsedNumber) ||
      parsedNumber <= 0
    ) {
      throw new Error('[ERROR] 시도 횟수가 양의 정수가 아닙니다.');
    }
  }
}

export default Input;

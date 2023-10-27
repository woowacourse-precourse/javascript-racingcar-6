import { Console } from '@woowacourse/mission-utils';
import { checkIsValidNumber, isUserInputValid, splitCarsInput } from './utils.js';

class App {
  cars = [];
  tryNumber = 0;

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    this.initializeCars(input);
  }

  initializeCars(carsInput) {
    isUserInputValid(carsInput);
    const cars = splitCarsInput(carsInput);
    this.cars = [...cars];
  }

  async getTryNumber() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.initializeTryNumber(input);
  }

  initializeTryNumber(numberInput) {
    checkIsValidNumber(numberInput);
    this.tryNumber = Number(numberInput);
  }
}

export default App;

import { Console } from '@woowacourse/mission-utils';
import { isUserInputValid, splitCarsInput } from './utils.js';

class App {
  cars = [];

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    this.checkIsValidCars(input);
    return input;
  }

  checkIsValidCars(carsInput) {
    isUserInputValid(carsInput);
    this.initializeCars(carsInput);
  }

  initializeCars(carsInput) {
    const cars = splitCarsInput(carsInput);
    this.cars = [...cars];
  }
}

export default App;

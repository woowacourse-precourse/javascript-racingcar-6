import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import ErrorHandler from './ErrorHandler.js';

class App {
  async play() {
    const carNames = await this.inputCarName();
    ErrorHandler.checkCarNames(carNames);
    const carNameArray = carNames.split(',');
    const cars = carNameArray.map((carName) => new Car(carName));

    Console.print(cars);
  }

  async inputCarName() {
    const car_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return car_names;
  }
}

export default App;

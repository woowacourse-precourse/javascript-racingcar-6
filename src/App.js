import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import ErrorHandler from './ErrorHandler.js';

class App {
  async play() {
    const carNames = await this.inputCarName();
    ErrorHandler.checkCarNames(carNames);
    const carNameArray = carNames.split(',');
    const cars = carNameArray.map((carName) => new Car(carName));
    const moveCount = await this.inputMoveCount();
    ErrorHandler.checkMoveCount(moveCount);
    this.racing(cars, moveCount);
  }

  async inputCarName() {
    const car_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return car_names;
  }

  async inputMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return moveCount;
  }

  racing(cars, moveCount) {
    while (moveCount--) {
      cars.forEach((car) => {
        car.move();
      });
    }
  }
}

export default App;

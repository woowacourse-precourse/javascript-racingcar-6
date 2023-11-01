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
    this.printResult(cars, moveCount);
    this.printWinner(this.findWinner(cars));
  }

  async inputCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return carNames;
  }

  async inputMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return moveCount;
  }

  racing(cars, moveCount) {
    for (let i = 0; i < moveCount; i++) {
      cars.forEach((car) => car.move());
    }
  }

  printResult(cars, moveCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < moveCount; i++) {
      cars.forEach((car) => car.printState(i));
      Console.print(' ');
    }
  }

  findWinner(cars) {
    const maxCount = Math.max(...cars.map((car) => car.count));
    return cars.filter((car) => car.count === maxCount).map((car) => car.carName);
  }

  printWinner(winners) {
    const winnersString = winners.join(', ');
    Console.print(`최종 우승자 : ${winnersString}\n`);
  }
}

export default App;

import Cars from './Car.js';
import InputView from '../view/inputView.js';
import OutputView from '../view/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carNames = await InputView.getCarName();
    const tryNumber = await InputView.getTryNumber();

    const cars = new Cars(carNames);
    Console.print("\n실행 결과");

    for (var i = 0; i < tryNumber; i++) {
      cars.moveCars()
      OutputView.printCars(cars.names, cars.distances);
    }

    cars.getWinners()
    OutputView.printWinners(cars.winners);
  }
}

export default App;

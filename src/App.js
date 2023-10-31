import { Console } from '@woowacourse/mission-utils';
import { getCarName, getTryCount, printResultCar, printResultHeader, printResultWinner } from './View.js';
import Model from './Model/Model.js';

class App {
  constructor() {
    this.model = new Model();
  }

  async play() {
    let i = 0;

    const cars = await getCarName();
    this.model.addCar(cars);
    const tryCount = await getTryCount();

    printResultHeader();
    for (i = 0; i < tryCount; i += 1) {
      printResultCar(this.model.goCars().getCars());
    }

    printResultWinner(this.model.getWinners().map((car) => car.getName()));

    return this;
  }
}

export default App;

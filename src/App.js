import Combiner from './Combiner/Combiner.js';
import Receiver from './Receiver/Receiver.js';
import Validator from './Validator/Validator.js';
import Car from './Car/Car.js';
import Printer from './Printer/Printer.js';

class App {
  #carNames;

  #tryNum;

  #carArray;

  #cars;

  #winners;

  async play() {
    this.#carNames = await Receiver.receiveCarNames();

    Validator.checkValidCarsName(Combiner.combineArray(this.#carNames));

    this.#carArray = Combiner.combineArray(this.#carNames);

    this.#tryNum = await Receiver.receiveGameTryNum();

    Validator.checkIsPostiveNum(this.#tryNum);

    this.#cars = this.#carArray.map((carName) => new Car(carName));

    Printer.printResult();

    for (let i = 0; i < this.#tryNum; i += 1) {
      Printer.printRound(i + 1);

      this.#cars.forEach((car) => {
        car.moveCar();
        car.getCarInfomation();
      });
    }

    this.#winners = Car.versusCarDistance().map((car) => car.getCarName());

    Combiner.joinArray(this.#winners);

    Printer.printWinner(this.#winners);
  }
}

export default App;

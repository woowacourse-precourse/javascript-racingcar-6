import Combiner from './Combiner/Combiner.js';
import Receiver from './Receiver/Receiver.js';
import Validator from './Validator/Validator.js';
import Car from './Car/Car.js';
import Printer from './Printer/Printer.js';

class App {
  #receiver = new Receiver();

  #carNames;

  #tryNum;

  #carArray;

  #cars;

  async play() {
    this.#carNames = await this.#receiver.receiveCarNames();

    Validator.checkValidCarsName(Combiner.combineArray(this.#carNames));

    this.#carArray = Combiner.combineArray(this.#carNames);

    this.#tryNum = await this.#receiver.receiveGameTryNum();

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
  }
}

export default App;

import Combiner from './Combiner/Combiner.js';
import Receiver from './Receiver/Receiver.js';
import Validator from './Validator/Validator.js';
import Car from './Car/Car.js';

class App {
  #receiver = new Receiver();

  #validator = new Validator();

  #carNames;

  #tryNum;

  #carArray;

  #cars;

  #empty;

  async play() {
    this.#carNames = await this.#receiver.receiveCarNames();

    this.#validator.checkValidCarsName(Combiner.combineArray(this.#carNames));

    this.#carArray = Combiner.combineArray(this.#carNames);

    this.#tryNum = await this.#receiver.receiveGameTryNum();

    Validator.checkIsPostiveNum(this.#tryNum);

    this.#cars = this.#carArray.map((carName) => new Car(carName));

    for (let i = 0; i < this.#tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.moveCar();
        car.getCarInfomation();
      });
    }
  }
}

export default App;

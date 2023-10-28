import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import Cars from "../model/Cars.js";
import CarNamesParser from "../parser/CarNamesParser.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class Race {
  #racingCars;

  constructor() {}

  async init() {
    await this.#readInputAndRegisterCars();
  }

  async #readInputAndRegisterCars() {
    const input = await InputView.readCarNames();
    const carNames = CarNamesParser.parse(input);
    const cars = carNames.map((name) => new Car(name));
    this.#register(new Cars(cars));
  }

  #register(cars) {
    if (cars.length < 2) throw Error(ERROR_MESSAGE.lessThenTwoCars);
    this.#racingCars = cars;
  }
}

export default Race;

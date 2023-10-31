import { MissionUtils } from "@woowacourse/mission-utils";
import CarNameInputView from "../views/car-name-input-view.js";
import Car from "../models/car.js";

const messages = {
  duplicatedCarName: "[ERROR] 중복된 자동차 이름이 있습니다.",
  carNameEmptyError: "[ERROR] 등록할 수 있는 차량이 없습니다.",
};

const MIN_RANDOM = 0;
const MAX_RANDOM = 9;

class CarController {
  constructor() {
    this.cars = [];
    this.carNameInputView = new CarNameInputView();
  }

  #seperateCarNames(name) {
    return name.split(",");
  }

  #trimCarName(name) {
    return name.trim();
  }

  #filterCarName(name) {
    return name.length > 0;
  }

  checkAllNamesEmpty(carNames) {
    const emptyCarNames = carNames.filter((name) => !this.#filterCarName(name));

    return emptyCarNames.length === carNames.length;
  }

  checkDuplicatedName(carNames) {
    const uniqueCarNames = [...new Set(carNames)];

    return carNames.length !== uniqueCarNames.length;
  }

  addCar(name) {
    const newCar = new Car(name);

    this.cars.push(newCar);
  }

  async init() {
    const name = await this.carNameInputView.getCarNames();
    let carNames = this
      .#seperateCarNames(name)
      .map(this.#trimCarName);

    if (carNames.length === 0) {
      throw new Error(messages.carNameEmptyError);
    }

    carNames = carNames.filter(this.#filterCarName);

    if (this.checkDuplicatedName(carNames)) {
      throw new Error(messages.duplicatedCarName);
    }

    carNames.forEach((carName) => {
      this.addCar(carName);
    })
  }

  #generateRandomMove() {
    const randomMove = MissionUtils.Random.pickNumberInRange(MIN_RANDOM, MAX_RANDOM);

    return randomMove;
  }

  moveCars() {
    this.cars.forEach((car) => {
      const randomMove = this.#generateRandomMove();

      car.move(randomMove);
    });
  }

  getFurthestCars() {
    let furthestLocation = 0;
    let furthestCars = [];

    this.cars.forEach((car) => {
      if (car.getLocation() < furthestLocation) return;
      
      if (car.getLocation() === furthestLocation) {
        furthestCars.push(car);
        return;
      }

      furthestLocation = car.getLocation();
      furthestCars = [car];
    });

    return furthestCars;
  }
}

export default CarController;

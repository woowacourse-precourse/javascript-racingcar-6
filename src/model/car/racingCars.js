import RacingCar from "./racingCar.js";

class RacingCars {
  #cars = [];

  getCars() {
    return this.#cars;
  }

  checkInputNull(inputNamesString) {
    if (!inputNamesString) {
      throw new Error("[ERROR] 이름을 입력해 주세요.");
    }
  }

  parseCarNames(inputNamesString) {
    const carNamesList = inputNamesString.split(",").map((name) => name.trim());
    return carNamesList;
  }

  checkDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  checkNameBlank(carNames) {
    carNames.forEach((carName) => {
      if (carName === "") {
        throw new Error("[ERROR] 이름은 공백이 될 수 없습니다.");
      }
    });
  }

  checkNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 5글자 이하의 이름을 입력해주세요.");
      }
    });
  }

  carNamesValidation(inputNamesString) {
    this.checkInputNull(inputNamesString);
    const carNames = this.parseCarNames(inputNamesString);
    this.checkNameBlank(carNames);
    this.checkDuplicateNames(carNames);
    this.checkNameLength(carNames);
    return carNames;
  }

  createCars(inputNamesString) {
    const carNames = this.carNamesValidation(inputNamesString);
    carNames.forEach((car) => {
      this.createCar(car);
    });
  }

  createCar(carName) {
    const car = new RacingCar(carName);
    this.#cars.push(car);
  }

  moveAllCars() {
    this.#cars.forEach((car) => car.move());
  }
}

export default RacingCars;

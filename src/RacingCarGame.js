import IOManager from './IOManager';

class RacingCarGame {
  #cars;

  static #MESSAGE = Object.freeze({
    GET_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  });

  constructor() {
    this.#cars = [];
  }

  #getCarNames() {
    const carNames = IOManager.input(RacingCarGame.#MESSAGE.GET_CAR_NAMES);
    this.#validateCarNames(carNames);
    return carNames;
  }

  #validateCarNames(carNames) {
    if (carNames === '') {
      throw new Error('입력이 없습니다.');
    }

    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      if (carName.trim().length === 0) {
        throw new Error('자동차 이름은 공백이 될 수 없습니다.');
      }

      if (carName.trim().length > 5) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
    });
  }

  #createCarObjectsFromNames(carNames) {
    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      this.#cars.push(new Car(carName.trim()));
    });
  }
}

export default RacingCarGame;

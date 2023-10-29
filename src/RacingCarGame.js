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

  #validateCarNames(carNames) {}
}

export default RacingCarGame;

import RacingCar from '../model/RacingCar.js';
import RacingGame from '../model/RacingGame.js';
import inputView from '../view/inputView.js';

class RacingGameController {
  constructor() {
    this.racingGame = new RacingGame();
  }

  /** 레이싱 경주 시작 함수 */
  async start() {
    /** @type {string} 자동차 이름 */
    const carNames = await inputView.readCarNames();

    this.registerRacingCar(carNames.split(','));
  }

  /**
   * 경주에 참여할 자동차 등록 함수
   * @param {string[]} carList
   */
  registerRacingCar(carList) {
    /** @type {RacingCar[]} */
    const racingCars = carList.map((carName) => {
      const car = new RacingCar();
      car.setCarName = carName;
      return car;
    });

    this.racingGame.setRacingCar = racingCars;
  }
}

export default RacingGameController;

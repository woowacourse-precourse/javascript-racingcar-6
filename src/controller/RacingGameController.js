import RacingCar from '../model/RacingCar.js';
import RacingGame from '../model/RacingGame.js';
import { validateMoveCount } from '../utils/validate.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

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

    this.inputMoveCount();
  }

  /** 이동 횟수 입력 함수 */
  async inputMoveCount() {
    const count = await inputView.readMoveCount();
    validateMoveCount(Number(count));

    this.moveCars(Number(count));
  }

  /**
   * 자동차 이동 함수
   * @param {number} count
   */
  moveCars(count) {
    outputView.printRacingComment();
    for (let i = 0; i < count; i++) {
      this.racingGame.checkMove();

      this.racingResult();
    }
  }

  /** 레이싱 결과 출력 함수 */
  racingResult() {
    const carList = this.racingGame.getRacingCar;
    carList.forEach((car) => outputView.printRacing(car));
    outputView.printSpace();
  }
}

export default RacingGameController;

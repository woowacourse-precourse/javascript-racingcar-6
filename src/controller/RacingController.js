import RacingCar from '../model/RacingCar.js';
import RacingGame from '../model/RacingGame.js';
import { validateMoveCount, validateNameDuplicate } from '../utils/validate.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class RacingController {
  constructor() {
    this.racingGame = new RacingGame();
  }

  /** 레이싱 경주 시작 함수 */
  async start() {
    /** @type {string} 자동차 이름 */
    const carNames = await inputView.readCarNames();
    this.registerCars(carNames.split(','));
  }

  /**
   * 경주에 참여할 자동차 등록 함수
   * @param {string[]} carList
   */
  registerCars(carList) {
    const racingCars = this.createCars(carList);
    this.racingGame.setRacingCar(racingCars);
    this.inputMoveCount();
  }

  /**
   * 경주에 참여할 자동차 생성 함수
   * @param {string[]} carList
   */
  createCars(carList) {
    validateNameDuplicate(carList);
    return carList.map((carName) => {
      const car = new RacingCar();
      car.setCarName(carName);
      return car;
    });
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
    while (count--) {
      this.racingGame.checkMove();
      this.printRacingResult();
    }
    this.printWinner();
  }

  /** 레이싱 결과 출력 함수 */
  printRacingResult() {
    const carList = this.racingGame.getRacingCar();
    carList.forEach((car) => outputView.printRacing(car));
    outputView.printSpace();
  }

  /** 최종 우승자 출력 함수 */
  printWinner() {
    outputView.printWinner(this.racingGame.winner());
  }
}

export default RacingController;

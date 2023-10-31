import { RACING_CAR } from '../constants/constants.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class RacingGame {
  constructor() {
    /** @type {Array} */
    this.racingCar = [];
  }

  /** @returns {Array} */
  getRacingCar() {
    return this.racingCar;
  }

  /** @param {Array} racingCars  */
  setRacingCar(racingCars) {
    racingCars.forEach((car) => this.racingCar.push(car));
  }

  /** 난수 값이 4이상일 경우 한칸 전진 */
  checkMove() {
    this.racingCar.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= RACING_CAR.MOVE_NUMBER) car.move();
    });
  }

  /**
   * 가장 멀리간 position값 찾기 함수
   * @returns {number} 가장 멀리간 position 값
   */
  findMaxPosition() {
    return this.racingCar.reduce((acc, cur) => {
      return Math.max(acc, cur.carPosition);
    }, 0);
  }

  /**
   * 레이싱 승자 찾기 함수
   * @returns {string} 레이싱 승자
   */
  winner() {
    const maxPosition = this.findMaxPosition();

    /** @type {string} 레이싱 승자 (,로 연결한 문자열) */
    const win = this.racingCar
      .filter((car) => car.carPosition == maxPosition)
      .map((car) => car.carName)
      .join(', ');

    return win;
  }
}

export default RacingGame;

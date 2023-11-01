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
   * 레이싱 승자 position값 리턴 함수
   * @returns {number} 레이싱 승자 position 값
   */
  findWinnerPosition() {
    return this.racingCar.reduce((win, cur) => {
      return Math.max(win, cur.carPosition);
    }, 0);
  }

  /**
   * 레이싱 승자 찾기 함수
   * @returns {string} 레이싱 승자
   */
  winner() {
    const winnerPosition = this.findWinnerPosition();

    return this.racingCar
      .filter((car) => car.carPosition === winnerPosition)
      .map((car) => car.carName)
      .join(', ');
  }
}

export default RacingGame;

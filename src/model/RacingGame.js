import { RACING_CAR } from '../constants/constants.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class RacingGame {
  constructor() {
    /** @type {Array} */
    this.racingCar = [];
  }

  /** @returns {Array} */
  get getRacingCar() {
    return this.racingCar;
  }

  set setRacingCar(racingCars) {
    racingCars.forEach((car) => this.racingCar.push(car));
  }

  /** 난수 값이 4이상일 경우 한칸 전진 */
  checkMove() {
    this.racingCar.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= RACING_CAR.MOVE_NUMBER) car.move();
    });
  }

  /** 레이싱 승자 찾기 함수 */
  winner() {
    /** @type {number} carPostion 중 가장 큰 숫자 */
    const maxPostion = this.racingCar.sort(
      (nxt, cur) => cur.carPosition - nxt.carPosition,
    )[0].carPosition;

    /** @type {string} 레이싱 승자 (,로 연결한 문자열) */
    const win = this.racingCar
      .filter((car) => car.carPosition == maxPostion)
      .map((car) => car.carName)
      .join(', ');
    return win;
  }
}

export default RacingGame;

import { generatorRandomNumber } from '../utils/generatorRandomNumber.js';

class RacingGame {
  /**
   * @type { number } 게임에서 전진 조건
   */
  static ADVANCE_NUMBER = 4;

  /**
   * @type { Array<Map<string, string>> } 각 라운드 게임 결과를 담을 필드
   */

  #roundResults;

  /**
   * @type { string } 초기 공백값
   */

  static INITIAL_SPACE = '';

  /**
   * @type { Map } 게임 결과를 담을 Map 객체
   */

  #gameStatus;

  /**
   * @type { string[] } 게임에 참가할 자동차들
   */

  #cars;

  /**
   * @type { number } 시도 횟수
   */

  #attemps;

  /**
   *
   * @param { AllNamesOfCars } cars
   * @param { CountOfAttemp } attemps
   */

  constructor(cars, attemps) {
    this.#cars = cars.getAllCars();
    this.#attemps = attemps.getNumberOfAttemps();
    this.#gameStatus = new Map(this.#cars.map((car) => [car, RacingGame.INITIAL_SPACE]));
    this.#roundResults = [];
  }

  getResult() {
    for (let i = 0; i < this.#attemps; i++) {
      this.runRound();
      const currentRoundResult = new Map(this.#gameStatus);
      this.#roundResults.push(currentRoundResult);
    }
    return this.#roundResults;
  }

  runRound() {
    this.#cars.forEach((car) => {
      const randomNum = generatorRandomNumber();
      if (randomNum >= RacingGame.ADVANCE_NUMBER) {
        const currentCount = this.#gameStatus.get(car) || 0;
        this.#gameStatus.set(car, currentCount + 1);
      }
    });
  }

  getFinalWinner() {
    const entries = Array.from(this.#gameStatus.entries());
    const maxMove = Math.max(...entries.map(([_, value]) => value));
    const winners = entries.filter(([, value]) => value === maxMove).map(([key]) => key);

    return winners;
  }
}

export default RacingGame;

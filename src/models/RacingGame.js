import { RANDOM_NUMBER_RANGE } from '../constants/random.js';
import { pickRandomNumberInRange } from '../utils/random.js';
import RacingCar from './RacingCar.js';

/**
 * @class RacingGame
 * @classdesc '자동차 경주 결과 생성'의 책임을 수행
 */
class RacingGame {
  /**
   * @type {string[]}
   */
  #carNames;

  /**
   * @type {number}
   */
  #moveCount;

  /**
   * @type {import('../utils/jsDoc.js').RacingStatus}
   */
  #racingStatus;

  constructor(carNames, moveCount) {
    this.#carNames = carNames;
    this.#moveCount = moveCount;
    this.#racingStatus = this.#initializeRacingStatus();
  }

  /**
   * @private
   * @returns {import('../utils/jsDoc.js').RacingStatus} 초기 레이싱 진행 상태(ex 1lap)
   */
  #initializeRacingStatus() {
    return this.#carNames.map((carName) => ({ carName, position: 0 }));
  }

  /**
   * 매개변수가 2개 이상인 정적 팩토리 메서드
   * @static
   * @public
   * @param {string[]} carNames - 자동차 이름들
   * @param {number} moveCount - 이동 횟수
   * @returns {RacingGame} RacingGame 인스턴스
   */
  static of(carNames, moveCount) {
    return new RacingGame(carNames, moveCount);
  }

  /**
   * @public
   * @returns {import('../utils/jsDoc.js').RacingResult} moveCount만큼 진행된 레이싱의 결과
   */
  runRace() {
    return Array.from({ length: this.#moveCount }, () => {
      this.#updateRacingStatus();
      return [...this.#racingStatus];
    });
  }

  /**
   * @private
   */
  #updateRacingStatus() {
    const { minNumber, maxNumber } = RANDOM_NUMBER_RANGE;
    this.#racingStatus = this.#racingStatus.map((currentRacingCarInfo) =>
      RacingCar.from(currentRacingCarInfo).move(pickRandomNumberInRange(minNumber, maxNumber)),
    );
  }
}

export default RacingGame;

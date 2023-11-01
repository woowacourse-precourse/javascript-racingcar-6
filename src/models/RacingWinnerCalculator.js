import { SYMBOLS } from '../constants/symbols.js';

/**
 * @class RacingWinnerCalculator
 * @classdesc '자동차 경주 우승자 계산'의 책임을 수행
 */
class RacingWinnerCalculator {
  /**
   * @private
   * @type {import('../utils/jsDoc.js').RacingStatus}
   */
  #lastRacingStatus;

  constructor(lastRacingStatus) {
    this.#lastRacingStatus = [...lastRacingStatus];
  }

  /**
   * 매개변수가 1개인 정적 팩토리 메서드
   * @static
   * @public
   * @param {import('../utils/jsDoc.js').RacingStatus} lastRacingStatus - 최종 레이싱 진행 상태
   * @returns {RacingWinnerCalculator} RacingWinnerCalculator 인스턴스
   */
  static from(lastRacingStatus) {
    return new RacingWinnerCalculator(lastRacingStatus);
  }

  /**
   * @public
   * @returns {string} 레이싱 우승자들의 이름
   */
  calculateRacingWinners() {
    return this.#sortLastRacingStatusPositionByDescending()
      .#filterTopPositionCars()
      .#extractWinnerNames()
      .join(`${SYMBOLS.comma} `);
  }

  /**
   * @private
   * @returns {RacingWinnerCalculator} lastRacingStatus가 position으로 내림차순 된 후의 RacingWinnerCalculator 인스턴스
   */
  #sortLastRacingStatusPositionByDescending() {
    this.#lastRacingStatus = this.#lastRacingStatus.sort(
      (racingCarInfo, otherRacingCarInfo) => otherRacingCarInfo.position - racingCarInfo.position,
    );
    return this;
  }

  /**
   * @private
   * @returns {RacingWinnerCalculator} lastRacingStatus에서 position이 가장 높은 자동차 정보만 남긴 후의 RacingWinnerCalculator 인스턴스
   */
  #filterTopPositionCars() {
    const topPosition = this.#lastRacingStatus.at(0).position;
    this.#lastRacingStatus = this.#lastRacingStatus.filter(
      ({ position }) => position === topPosition,
    );
    return this;
  }

  /**
   * @private
   * @returns {string[]} lastRacingStatus에서 각 racingCarInfo에 carName만 추출한 후의 RacingWinnerCalculator 인스턴스
   */
  #extractWinnerNames() {
    return this.#lastRacingStatus.map(({ carName }) => carName);
  }
}

export default RacingWinnerCalculator;

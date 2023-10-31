/**
 * @class RacingCar
 * @classdesc '자동차 이동'에 대한 책임을 수행
 */
class RacingCar {
  static MOVE_THRESHOLD = 4;

  static MAX_CAR_NAME_LENGTH = 5;

  /**
   * @private
   * @type {import("../utils/jsDoc").RacingCarInfo}
   */
  #racingCarInfo;

  constructor(racingCarInfo) {
    this.#racingCarInfo = { ...racingCarInfo };
  }

  /**
   * 매개변수가 1개인 정적 팩토리 메서드
   * @static
   * @public
   * @param {import("../utils/jsDoc").RacingCarInfo} racingCarInfo - 레이싱에 진행하는 자동차의 정보
   * @returns {RacingCar} RacingCar 인스턴스
   */
  static from(racingCarInfo) {
    return new RacingCar(racingCarInfo);
  }

  /**
   * @public
   * @param {number} randomNumber - 랜덤으로 생성된 값
   * @returns {import("../utils/jsDoc").RacingCarInfo} 이동 여부가 업데이트 된 RacingCarInfo
   */
  move(randomNumber) {
    const { position: prevPosition } = this.#racingCarInfo;
    return randomNumber >= RacingCar.MOVE_THRESHOLD
      ? { ...this.#racingCarInfo, position: prevPosition + 1 }
      : this.#racingCarInfo;
  }
}

export default RacingCar;

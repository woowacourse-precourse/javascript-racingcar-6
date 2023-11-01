import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 자동차 정보를 저장하는 모델
 */
class CarModel {
  /**
   * @param {string} name 자동차 이름
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**
   * 자동차의 정보를 DTO로 반환
   * @returns {{name:string; position: number;}} CarModel DTO
   */
  getCarModelDTO() {
    return { name: this.name, position: this.position };
  }

  /**
   * 자동차 전진
   * 1. 0부터 9까지의 랜덤한 숫자 생성
   * 2. 위에서 구한 숫자가 4 이상이면 전진(position 1 증가)
   */
  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randNum >= 4) this.position++;
  }

  /**
   * 우승자인지 판단
   * @param {number} winnerPos 우승자의 position 값
   * @returns {boolean} 우승자 여부
   */
  isWinner(winnerPos) {
    return this.position === winnerPos;
  }
}

export default CarModel;

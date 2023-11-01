import { MissionUtils } from '@woowacourse/mission-utils';

class CarModel {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randNum >= 4) this.position++;
  }

  isWinner(winnerPos) {
    return this.position === winnerPos;
  }

  /**
   * 자동차의 정보를 DTO로 반환
   * @returns {{name:string; position: number;}} CarModel DTO
   */
  getCarModelDTO() {
    return { name: this.name, position: this.position };
  }
}

export default CarModel;

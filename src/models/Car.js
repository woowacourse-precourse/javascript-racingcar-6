import { Random } from '@woowacourse/mission-utils';

class Car {
  /**
   * @param {string} carName - 차량의 이름을 나타내는 문자열
   */
  constructor(carName) {
    this.carName = carName;
    this.position = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.setPosition('-');
    }
  }

  /**
   * @param {string} position - 문자열을 받아 기존 문자열에 덧붙인다.
   */
  setPosition(position) {
    this.position += position;
  }
}

export default Car;

import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Generator {
  /**
   * 랜덤한 숫자를 생성해, 4 이상이면 전진(true)를 리턴
   * @returns {boolean}
   */
  static isAddGenerator() {
    const randomNum = Random.pickNumberInRange(0, 9);
    const isAdd = randomNum >= 4 ? true : false;

    return isAdd;
  }

  /**
   * racing후 cars
   * @param {[Car]} cars
   * 우승한 자동차의 Car 배열 타입
   * @returns {[Car]}
   */
  static winnerGenerator(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.distance));
    const winners = cars.filter((car) => car.distance === maxDistance);

    return winners;
  }
}

export default Generator;

import { Random, Console } from '@woowacourse/mission-utils';
import { NUMERIC } from './constants/index.js';

class Car {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const { from, to } = NUMERIC.RANDOM_RANGE;
    const determinant = Random.pickNumberInRange(from, to);

    if (determinant >= NUMERIC.FORWARD_THRESHOLD) this.position += 1;
  }

  getPosition() {
    return this.position;
  }

  toString() {
    return this.name;
  }

  print() {
    Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }

  /**
   * 자동차들 중에서 가장 큰 position을 가진 자동차의 position을 반환합니다.
   * @param  {...Car} cars
   */
  static getMaxPosition(...cars) {
    return Math.max(...cars.map((car) => car.getPosition()));
  }

  /**
   * 자동차 배열을 받아서 가장 큰 position을 가진 자동차들을 반환합니다.
   * @param {Car[]} cars
   * @returns {Car[]}
   */
  static getWinners(cars) {
    const maxPosition = Car.getMaxPosition(...cars);
    return cars.filter((car) => car.getPosition() === maxPosition);
  }

  /**
   * 자동차 배열을 받아서 경주를 진행하고 우승자를 반환합니다.
   * @param {Car[]} cars
   * @returns {Car[]}
   */
  static race(cars) {
    cars.forEach((car) => {
      car.move();
      car.print();
    });
    return Car.getWinners(cars);
  }
}

export default Car;

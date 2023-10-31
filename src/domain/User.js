import { Random } from '@woowacourse/mission-utils';

import Car from './Car.js';

import ApplicationError from '../exceptions/ApplicationError.js';

import ERROR_MESSAGE from '../constants/error.js';

class User {
  /**
   * User 이름의 최대 길이
   * @type {5}
   */
  static MAX_NAME_LENGTH = 5;

  /**
   * accelerate에서 생성되는 난수의 최소 값
   * @type {0}
   */
  static MIN_ACCELERATE_POWER = 0;

  /**
   * accelerate에서 생성되는 난수의 최대 값
   * @type {9}
   */
  static MAX_ACCELERATE_POWER = 9;

  /**
   * User의 이름
   * @type {string}
   * @private
   */
  #name;

  /**
   * `User`가 소유한 `Car` 인스턴스
   * @type {Car}
   * @private
   */
  #car;

  /**
   * @param {string} name 유저의 이름
   */
  constructor(name) {
    this.#validate(name);

    this.#name = name;
    this.#car = Car.of();
  }

  /**
   * @param {string} name 유저의 이름
   */
  static of(name) {
    return new User(name);
  }

  /**
   * @param {string} name
   */
  #validate(name) {
    if (typeof name !== 'string') {
      throw new ApplicationError(ERROR_MESSAGE.user.isNotStringName);
    }
    if (name.trim().length === 0) {
      throw new ApplicationError(ERROR_MESSAGE.user.isBlankName);
    }
    if (name.length > User.MAX_NAME_LENGTH) {
      throw new ApplicationError(ERROR_MESSAGE.user.isOverMaxLengthName);
    }
  }

  /**
   * User의 이름을 반환합니다.
   * @returns {string} User의 이름
   */
  getName() {
    return this.#name;
  }

  /**
   * User의 car를 반환합니다.
   * @returns {Car} User의 Car
   */
  getCar() {
    return this.#car;
  }

  /**
   * User의 car를 move할지 결정합니다.
   */
  accelerate() {
    const power = Random.pickNumberInRange(User.MIN_ACCELERATE_POWER, User.MAX_ACCELERATE_POWER);
    this.#car.move(power);
  }
}

export default User;

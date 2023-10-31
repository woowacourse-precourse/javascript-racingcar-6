import { Random } from '@woowacourse/mission-utils';
import Car from './Car';
import ApplicationError from '../exceptions/ApplicationError';
import ERROR_MESSAGE from '../constants/error';

class User {
  static MAX_NAME_LENGTH = 5;

  static MIN_ACCELERATE_POWER = 0;

  static MAX_ACCELERATE_POWER = 9;

  #name;

  #car;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
    this.#car = Car.of();
  }

  static of(name) {
    return new User(name);
  }

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

  getName() {
    return this.#name;
  }

  getCar() {
    return this.#car;
  }

  accelerate() {
    const power = Random.pickNumberInRange(User.MIN_ACCELERATE_POWER, User.MAX_ACCELERATE_POWER);
    this.#car.move(power);
  }
}

export default User;

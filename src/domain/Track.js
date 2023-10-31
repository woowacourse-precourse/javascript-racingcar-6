import Car from './Car.js';
import User from './User.js';

import ApplicationError from '../exceptions/ApplicationError.js';

import ERROR_MESSAGE from '../constants/error.js';

import { invalidInstanceElement, isDuplicated } from '../utils/validator.js';

class Track {
  static MIN_LAP_COUNT = 1;

  #users;

  #currentLap = 1;

  #finalLap;

  constructor(users, lap) {
    this.#validateUsers(users);
    this.#validateLap(lap);

    this.#users = users;
    this.#finalLap = lap;
  }

  static of(users, lap) {
    return new Track(users, lap);
  }

  #validateUsers(users) {
    if (!Array.isArray(users)) {
      throw new ApplicationError(ERROR_MESSAGE.track.isNotArrayUsers);
    }
    if (invalidInstanceElement(users, User)) {
      throw new ApplicationError(ERROR_MESSAGE.track.isExistNotUserInstance);
    }
    const userNames = Array.from(users, (user) => user.getName());
    if (isDuplicated(userNames)) {
      throw new ApplicationError(ERROR_MESSAGE.track.isDuplicatedUserName);
    }
  }

  #validateLap(lap) {
    if (typeof lap !== 'number') {
      throw new ApplicationError(ERROR_MESSAGE.track.isNotNumberLap);
    }
    if (lap < Track.MIN_LAP_COUNT) {
      throw new ApplicationError(ERROR_MESSAGE.track.isUnderMinLap);
    }
    if (!Number.isInteger(lap)) {
      throw new ApplicationError(ERROR_MESSAGE.track.isNotIntegerLap);
    }
  }

  getUsers() {
    return this.#users;
  }

  getCurrentLap() {
    return this.#currentLap;
  }

  getFinalLap() {
    return this.#finalLap;
  }

  processLap() {
    this.#validateProcessLap();

    this.#users.forEach((user) => {
      user.accelerate();
    });
    this.#currentLap += 1;
  }

  #validateProcessLap() {
    if (this.isEnd()) {
      throw new ApplicationError(ERROR_MESSAGE.track.isEndedTrack);
    }
  }

  getCurrentLapResult() {
    const result = {};

    this.#users.forEach((user) => {
      const distance = user.getCar().getDistance();
      result[user.getName()] = Car.SKID_MARK.repeat(distance);
    });

    return result;
  }

  getCurrentWinners() {
    const distances = Array.from(this.#users, (user) => user.getCar().getDistance());
    const winningDistance = Math.max(...distances);
    const winners = this.#users.filter((user) => user.getCar().getDistance() === winningDistance);

    return Array.from(winners, (winner) => winner.getName());
  }

  isEnd() {
    return this.#currentLap > this.#finalLap;
  }
}

export default Track;

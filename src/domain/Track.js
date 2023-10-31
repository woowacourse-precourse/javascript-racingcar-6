import ERROR_MESSAGE from '../constants/error';
import ApplicationError from '../exceptions/ApplicationError';
import User from './User';

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

  #validateUsers(users) {
    if (!Array.isArray(users)) {
      throw new ApplicationError(ERROR_MESSAGE.track.isNotArrayUsers);
    }
    if (users.some((user) => !(user instanceof User))) {
      throw new ApplicationError(ERROR_MESSAGE.track.isExistNotUserInstance);
    }
    const uniqueNames = users.reduce((names, user) => names.add(user.getName()), new Set());
    if (uniqueNames.size !== users.length) {
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
    this.#users.forEach((user) => {
      user.accelerate();
    });
    this.#currentLap += 1;
  }

  isEnd() {
    return this.#currentLap === this.#finalLap;
  }
}

export default Track;

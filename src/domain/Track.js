import Car from './Car.js';
import User from './User.js';

import ApplicationError from '../exceptions/ApplicationError.js';

import ERROR_MESSAGE from '../constants/error.js';

import { invalidInstanceElement, isDuplicated } from '../utils/validator.js';

class Track {
  /**
   * 최소 finalLap 카운트
   * @type {1}
   */
  static MIN_LAP_COUNT = 1;

  /**
   * 경기에 참여할 `User`로 이루어진 배열
   * @type {User[]}
   * @private
   */
  #users;

  /**
   * 현재 lap
   * @type {number}
   * @private
   */
  #currentLap = 1;

  /**
   * 최종 lap
   * @type {number}
   * @private
   */
  #finalLap;

  /**
   * @param {User[]} users 트랙에 참가할 유저 목록
   * @param {number} lap 트랙의 최종 lap
   */
  constructor(users, lap) {
    this.#validateUsers(users);
    this.#validateLap(lap);

    this.#users = users;
    this.#finalLap = lap;
  }

  /**
   * @param {User[]} users 트랙에 참가할 유저 목록
   * @param {number} lap 트랙의 최종 lap
   */
  static of(users, lap) {
    return new Track(users, lap);
  }

  /**
   * @private
   * @param {User[]} users 트랙에 참가할 유저 목록
   */
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

  /**
   * @private
   * @param {number} lap  트랙의 최종 lap
   */
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

  /**
   * 경기를 1 Lap 진행합니다.
   */
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

  /**
   * 현재 랩의 User 마다 결과를 반환합니다.
   * @returns {{
   *  [key: string]: string
   * }}
   */
  getCurrentLapResult() {
    const result = {};

    this.#users.forEach((user) => {
      const distance = user.getCar().getDistance();
      result[user.getName()] = Car.SKID_MARK.repeat(distance);
    });

    return result;
  }

  /**
   * `Users`의 `Car`의 `distance`를 기반으로 현재 우승자를 반환합니다.
   * @returns {string[]} 우승자 이름 목록
   */
  getCurrentWinners() {
    let winningDistance = 0;

    const result = this.#users.reduce((winners, user) => {
      const userDistance = user.getCar().getDistance();
      if (userDistance > winningDistance) {
        winningDistance = userDistance;
        return [user.getName()];
      }
      return userDistance === winningDistance ? [...winners, user.getName()] : winners;
    }, []);

    return result;
  }

  /**
   * `currentLap`과 `finalLap`를 비교하여 트랙의 종료 여부를 반환합니다.
   * @returns {boolean} 트랙의 종료 여부
   */
  isEnd() {
    return this.#currentLap > this.#finalLap;
  }
}

export default Track;

import { Random } from '@woowacourse/mission-utils';
import { GAME } from './Constant.js';

export default class Car {
  #name;

  #distance;

  constructor(name = 'car', distance = GAME.DEFAULT_POSITION) {
    this.#name = name;
    this.#distance = distance;
  }

  get name() {
    return this.#name;
  }

  get distance() {
    return this.#distance;
  }

  getDistanceBar() {
    const bar = '-';
    const distanceBar = bar.repeat(this.#distance);

    return `${this.#name} : ${distanceBar}`;
  }

  move() {
    const movement = Random.pickNumberInRange(GAME.MIN_RANDOM, GAME.MIN_RANDOM);

    if (movement >= GAME.MOVEMENT_THRESHOLD) {
      this.#distance += 1;
    }
  }
}

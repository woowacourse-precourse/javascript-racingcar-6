import { Random } from '@woowacourse/mission-utils';
import { GAME } from './Constant.js';

export default class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = GAME.DEFAULT_POSITION;
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
    const movement = Random.pickNumberInRange(
      GAME.MIN_MOVEMENT,
      GAME.MAX_MOVEMENT
    );

    if (movement >= GAME.MOVEMENT_THRESHOLD) {
      this.#distance += movement;
    }
  }
}

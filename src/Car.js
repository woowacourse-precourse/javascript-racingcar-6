import { Random, Console } from '@woowacourse/mission-utils';
import { MOVE_ROLE } from './contants/racingGame.js';
import { MESSAGE_FORMAT } from './utils/messageFormat.js';

export default class Car {
  #name = null;
  #position = null;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(MOVE_ROLE.minRange, MOVE_ROLE.maxRange);
    if (randomNumber >= MOVE_ROLE.threshold) {
      this.#position += 1;
    }
  }

  printPosition() {
    const message = MESSAGE_FORMAT.position(this.#name, this.#position);
    Console.print(message);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

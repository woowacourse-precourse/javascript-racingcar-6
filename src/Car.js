import { ERROR_MESSAGE } from './constants/message.js';
import { KOREAN_BAD_WORD } from './db/badWordDB.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#checkBadWord(name);
    this.#name = name;
    this.#position = 0;
  }

  #checkBadWord(carName) {
    const isBadWord = KOREAN_BAD_WORD.some((badWord) => carName.includes(badWord));
    if (isBadWord) {
      throw new Error(`${ERROR_MESSAGE.CAR_NAME_INCLUDE_BAD_WORD} ${carName}`);
    }
  }

  move(distance) {
    this.#position += distance;
  }

  stop() {
    this.#position += 0;
  }

  record() {
    return [this.#name, this.#position];
  }
}

export default Car;

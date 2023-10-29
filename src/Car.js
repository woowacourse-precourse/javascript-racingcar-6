import { KOREAN_BAD_WORD } from './db/badWordDB.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = this.#checkBadWord(name);
    this.#position = 0;
  }

  #checkBadWord(carName) {
    const isBadWord = KOREAN_BAD_WORD.some((badWord) => carName.includes(badWord));

    if (isBadWord) {
      throw new Error(`[ERROR] 자동차 이름에 ${carName}을 사용할 수 없습니다.`);
    }

    return carName;
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

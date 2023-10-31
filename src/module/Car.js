import {MissionUtils} from '@woowacourse/mission-utils';

class Car {
  #name;
  #goingCount;

  constructor() {
    this.#name = "";
    this.#goingCount = 0;
  }

  get name() {
    return this.#name;
  }

  set name(input) {
    const nameLength = input.length;

    if (nameLength >= 1 && nameLength <= 5) {
      this.#name = input;
    } else {
      throw new Error('[ERROR] 1자 이상 5자 이하의 문자가 입력되지 않음');
    }
  }

  get goingCount() {
    return this.#goingCount;
  }

  set goingCount(input) {
    if (typeof input !== 'boolean') {
      throw new Error('[ERROR] Boolean 값이 아님');
    }
    if (input) this.#goingCount++;
  }

  print() {
    MissionUtils.Console.print(`${this.#name} : ${'-'.repeat(this.#goingCount)}`);
  }
}

export default Car;

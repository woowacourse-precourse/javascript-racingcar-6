import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  #currentState = '';

  constructor(name) {
    this.name = name;
  }

  async move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.#currentState += '-';
    }
  }

  async printCarData() {
    await Console.print(`${this.name} : ${this.#currentState}`);
  }

  getCarState() {
    return {
      carName: this.name,
      currentStateLength: this.#currentState.length,
    };
  }
}

export default Car;

import { GAME_FORWARD_CONDITION } from "../constants/GameSetting.js";

export default class Car {
  #Car = {
    name: null,
    advance: 0,
  };

  constructor(name) {
    this.#Car.name = name;
  }

  setAdvance(move) {
    if (move >= GAME_FORWARD_CONDITION) {
      this.#Car.advance++;
    }
  }

  getCar() {
    return this.#Car;
  }

  getName() {
    return this.#Car.name;
  }

  getAdvance() {
    return this.#Car.advance;
  }
}

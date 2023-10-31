import { CAR_DEFAULT, GAME_FORWARD_CONDITION } from '../constants/GameSetting.js';

export default class Car {
  #Car = {
    name: CAR_DEFAULT.name,
    advance: CAR_DEFAULT.advance,
  };

  constructor(name) {
    this.#Car.name = name;
  }

  setAdvance(move) {
    if (move >= GAME_FORWARD_CONDITION) {
      this.#Car.advance++;
    }
  }

  getName() {
    return this.#Car.name;
  }

  getAdvance() {
    return this.#Car.advance;
  }
}

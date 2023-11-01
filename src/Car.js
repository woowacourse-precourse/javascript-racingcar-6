import { GAME } from './Constant.js';

export default class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = GAME.DEFAULT_POSITION;
  }
}

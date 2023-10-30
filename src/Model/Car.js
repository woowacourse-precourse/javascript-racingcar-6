import { NUMBER } from "../utils/Constant.js";

class Car {
  name;
  #position;
  constructor() {
    this.name = '';
    this.#position = 0;
  }

  getName(name) {
    this.name = name;
  }

  checkPosition(tryNumber) {
    if (tryNumber >= NUMBER.NEED_RANDOM_NUMBER) this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
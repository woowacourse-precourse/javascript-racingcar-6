import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from "../constant/constant.js";

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;

    this.#validate();
  }

  #validate() {
    if (this.#name.length > CAR_NAME_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.inValidCarName);
    }
  }

  move() {
    this.#position += 1;
  }

  getCarInfo() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }
}

export default Car;

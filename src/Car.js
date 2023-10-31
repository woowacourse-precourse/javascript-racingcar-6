export default class Car {
  #carName = "";
  #count = 0;
  
  constructor(carName) {
    this.#carName = carName;
  }

  getCarName() {
    return this.#carName;
  }

  setMoveCount() {
    this.#count += 1;
  }

}

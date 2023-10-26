export default class Car {
  #name;
  #advanceCount;
  constructor(name = '') {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
  getAdvanceCount(){
    return this.#advanceCount;
  }
}

export default class Car {
  #name;
  #position;

  constructor(name) {
    /** @type string */
    this.#name = name;
    /** @type number */
    this.#position = 0; 
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  forward() {
    this.#position += 1;
  }
}
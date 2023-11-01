class Car {

  #name;
  
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  moveForward() {
    this.#position += 1;
  }
}

export default Car;

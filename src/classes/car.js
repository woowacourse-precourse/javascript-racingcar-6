class Car {
  #forwardLength = 0;

  constructor(name) {
    this.name = name;
  }

  moveForward() {
    this.#forwardLength += 1;
  }

  howFar() {
    return this.#forwardLength;
  }
}

export default Car;

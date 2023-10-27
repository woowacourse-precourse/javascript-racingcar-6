class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(distance) {
    this.#position += distance;
  }
}

export default Car;

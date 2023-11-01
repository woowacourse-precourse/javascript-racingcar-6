class Car {
  #name;
  #movedForwardCount;

  constructor(name) {
    this.#name = name;
    this.#movedForwardCount = 0;
  }

  get name() {
    return this.#name;
  }

  get moveForwardCount() {
    return this.#movedForwardCount;
  }

  movedForward() {
    this.#movedForwardCount += 1;
  }
}

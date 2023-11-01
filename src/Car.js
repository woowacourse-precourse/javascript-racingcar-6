export class Car {
  #name;
  #moves;

  constructor(name) {
    this.#name = name;
    this.#moves = 0;
  }

  moveForward() {
    this.#moves++;
  }

  score() {
    return { 
      name: this.#name,
      moves: this.#moves,
    }
  }
}

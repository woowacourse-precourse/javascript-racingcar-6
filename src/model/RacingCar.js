export default class RacingCar {
  #name;

  #status = 0;

  constructor(name) {
    this.#name = name;
  }

  moveRacingCar() {
    this.#status += 1;
  }

  getRacingCarStatus() {
    return { name: this.#name, status: this.#status };
  }
}

export default class RacingCar {
  #name;

  #status = 0;

  constructor(name) {
    this.#name = name;
  }

  getRacingCarStatus() {
    return { name: this.#name, status: this.#status };
  }
}

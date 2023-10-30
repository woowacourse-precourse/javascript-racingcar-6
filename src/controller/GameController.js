export class GameController {
  #inputView;
  #car;
  #attempt;
  #outputView;

  constructor({ inputView, outputView, car, attempt }) {
    this.#inputView = inputView;
    this.#car = car;
    this.#attempt = attempt;
    this.#outputView = outputView;
  }

  async start() {
    const cars = await this.#inputView.inputCarName();
    const attempt = await this.#inputView.inputAttempt();
    const result = compareCarsAndGetWinner(cars);
    this.#outputView.printResult(result);
  }

  async totalRace() {
    for (let i = 0; i < this.#attempt; i++) {
      this.start();
    }
  }
}

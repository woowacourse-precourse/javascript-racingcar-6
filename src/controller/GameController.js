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

  async raceCount() {
    for (let i = 0; i < this.#attempt; i++) {
      this.start();
    }
  }

  async start() {
    const cars = await this.#inputView.inputCarName();
    const result = compareCarsAndGetWinner(cars);
    this.#outputView.printResult(result);
  }
}

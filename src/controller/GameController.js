export class GameController {
  #inputView;
  #car;
  #outputView;

  constructor({ inputView, outputView, car }) {
    this.#inputView = inputView;
    this.#car = car;
    this.#outputView = outputView;
  }

  async racingGame() {
    const cars = await this.#inputView.inputCarName();
    const result = compareCarsAndGetWinner(cars);
    this.#outputView.printResult(result);
  }
}

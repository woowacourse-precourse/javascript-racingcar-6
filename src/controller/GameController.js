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
    // 자동차 이름과 시도 횟수 받아오기
    const carsList = await this.#inputView.getCarNameFromInput();
    const attempt = await this.#inputView.getAttemptFromInput();
    // 결과 전달
    const winners = this.race(carsList, attempt);
    this.#outputView.printWinner(winners);
  }

  // 시도 횟수만큼 반복
  async race() {
    for (let i = 0; i < this.#attempt; i++) {
      const result = carsList.moveGenerator(carsList);
      this.#outputView.printGameResult(result);
    }
  }
}

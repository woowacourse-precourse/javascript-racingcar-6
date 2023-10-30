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

  // 시도 횟수만큼 반복
  async totalRace() {
    for (let i = 0; i < this.#attempt; i++) {
      this.start();
    }
  }

  async start() {
    // 자동차 이름과 시도 횟수 받아오기
    const cars = await this.#inputView.inputCarName();
    const attempt = await this.#inputView.inputAttempt();

    // 결과 전달
    const result = race;
    this.#outputView.printResult(result);
  }
}

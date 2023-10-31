export class GameController {
  #inputView;
  #car;
  #attempt;
  #outputView;

  constructor({ inputView, outputView, car, attempt }) {
    this.#inputView = inputView;
    this.#car = car;
    this.#outputView = outputView;
  }

  async start() {
    // 자동차 이름과 시도 횟수 받아오기
    const cars = await this.#inputView.getCarsNameFromInput();
    const attemptCount = await this.#inputView.getAttemptFromInput();
    for (let i = 0; i < attemptCount; i++) {
      this.race(cars);
    }
    // 결과 전달
    const winners = this.race(carsList, attemptCount);
    this.#outputView.printWinner(winners);
  }

  // 시도 횟수만큼 반복
  async race(cars) {
    cars.moveAll(); // cars가 도메인 객체라 비즈니스 로직 실행
    this.#outputView.printGameResult(result);
  }
}

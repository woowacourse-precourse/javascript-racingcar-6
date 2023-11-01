import { Cars } from "../domain/Cars";

// @ts-check
export class GameController {
  /**
   * @type {InputView}
   */
  #inputView;
  /**
   * @type {OutputView}
   */
  #outputView;

  /**
   * @type {MoveDecider}
   */

  #moveDecider;

  /**
   *
   * @param {InputView} inputView
   * @param {OutputView} outputView
   * @param {MoveDecider} moveDecider
   */

  constructor(inputView, outputView, moveDecider) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#moveDecider = moveDecider;
  }

  /**
   * @return {Promise<void>}
   * @description - 1. 자동차 이름을 받아서 시작하기
   */

  async start() {
    const cars = await this.#inputView.inputCars();
    await this.#race(cars);
    this.#printGameWinners(cars);
  }

  /**
   *
   * @param {Cars} cars
   * @returns {Promise<void>}
   * @description - 2. 조건 변수인 시도 횟수(attemptCount)를 받아와서 진짜 레이스를 시작하는 #_race를 호출, 처음 한번 실행되며 이 함수는 조건변수를 가져오기 위한 함수이다
   */

  async #race(cars) {
    const attemptCount = await this.#inputView.inputAttemptCount();
    await this.#_race(cars, attemptCount);
  }

  /**
   *
   * @param {Cars} cars
   * @param {number} currentAttemptCount
   * @returns {Promise<void>}
   * @description - 3. 재귀함수로, 조건 변수인 시도 횟수를 1씩 줄이며 0이 될 때까지 재실행됨
   */
  async #_race(cars, currentAttemptCount) {
    //재귀함수는 종료 조건을 꼭 써주기
    if (currentAttemptCount === 0) {
      return;
    }
    cars.moveAllBy(this.#moveDecider); // cars가 도메인 객체라 비즈니스 로직 실행
    const carsDto = cars.makeCarsDto(); //CarsDto를 만들어서
    this.#outputView.printRoundResult(carsDto); //출력하기
    await this.#_race(cars, currentAttemptCount - 1); //조건 변수 3->2->1->0->종료
  }

  /**
   *
   * @param {Cars} cars
   * @returns {void}
   */
  #printGameWinners(cars) {
    const winnersDto = cars.makeWinnersDto(); //winners dto 생성
    this.#outputView.printWinners(winnersDto); //출력
  }
}

import { Cars } from "../domain/cars";
import InputView from "../view/inputView";
import OutputView from "../view/outputView";

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
   *
   * @param {InputView} inputView
   * @param {OutputView} outputView
   */

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }
  /**
   * @return {Promise<void>}
   */

  async start() {
    // 자동차 이름과 시도 횟수 받아오기
    const cars = await this.#inputView.inputCars();
    await this._race(cars);
  }
  /**
   *
   * @param {Cars} cars
   * @returns {Promise<void>}
   */

  // 시도 횟수를 받아와서 _race를 호출
  async #race(cars) {
    //처음 한번 실행
    //attemptCount가 조건 변수인 것 -> 조건 인자를 가져오는 것을 한번 감싸주는 것이다
    const attemptCount = await this.#inputView.inputAttemptCount();
    await this.#_race(cars, attemptCount);
  }
  /**
   *
   * @param {Cars} cars
   * @param {number} currentAttemptCount
   * @returns {Promise<void>}
   * @description - 한 라운드 :반복문은 재귀로 바꾸기, 본체 함수
   */
  async #_race(cars, currentAttemptCount) {
    //재귀함수는 종료 조건을 꼭 써주기
    if (currentAttemptCount === 0) {
      return;
    }
    cars.moveAll(); // cars가 도메인 객체라 비즈니스 로직 실행
    const carsDto = cars.makeCarsDto();
    this.#outputView.printRoundResult(carsDto);
    this.#_race(cars, currentAttemptCount - 1);
  }

  #printWinners(cars) {
    //winnersDto만들기(winner,winners모두 만들기)
    // WinnerDto {
    //   winners: [
    //     WinnerDto{name:'a'},
    //     WinnerDto{name:'b'},
    // ...
    //   ]
    // }
  }
}

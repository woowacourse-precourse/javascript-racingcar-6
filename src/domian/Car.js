// @ts-check
import { Random } from "@woowacourse/mission-utils";
import { SYMBOL } from "../constants/constants";
import InputView from "../view/inputView";
import { CarDto } from "./dto/carDto";

/**
 * @description - 비즈니스 로직을 실행할 도메인 객체
 * 1. 각 차량을 움직임
 * 2. CarDto 생성
 */
class Car {
  /**
   * @type {string}
   */

  #name;
  /**
   * @type {number}
   */
  #distance;

  /**
   * @param {string} carName
   */

  constructor(carName) {
    this.#validateCarName(carName);
    this.#name = carName;
    this.#distance = 0;
  }

  /**
   * @param {string} carName
   * @returns {void}
   *
   */
  #validateCarName(carName) {
    if (carName.length > 5 || carName.length < 1)
      throw new Error("자동차 이름은 1~5자리로 입력하세요.");
  }

  /**
   *
   * @returns {void}
   */

  // 이동 여부 판단 후 이동 결과 반환
  // 자동차 한대
  move() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumber > 4) {
      this.#distance++;
    }
  }
  //getter: name을 밖으로 빼서 쓸 수 있게, 외부에서 읽기만 가능하게(읽기 전용)
  // 함수지만 프로퍼티로
  /**
   * @returns {string}
   */
  get name() {
    return this.#name;
  }

  /**
   *
   * @returns {CarDto}
   */
  //여기사 carDto를 만들어준다
  makeCarDto() {
    return new CarDto(this.#name, this.#distance);
  }
}

export default Car;

// @ts-check
import { ERROR } from "../constants/constants";
import { CarDto } from "./dto/CarDto";
import { WinnerDto } from "./dto/WinnerDto";
import { MoveDecider } from "./MoveDecider";

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

  // 함수지만 프로퍼티로
  /**
   * @returns {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @returns {number}
   */
  get distance() {
    return this.#distance;
  }

  //getter: name을 밖으로 빼서 쓸 수 있게, 외부에서 읽기만 가능하게(읽기 전용)

  /**
   * @param {string} carName
   * @returns {void}
   *
   */
  #validateCarName(carName) {
    if (carName.length > 5 || carName.length < 0) {
      throw new Error(ERROR.NAME_RANGE_ERROR);
    }
  }

  /**
   *
   * @param {MoveDecider} moveDecider
   * @returns {void}
   */

  // 이동 여부 판단 후 이동 결과 반환
  // 자동차 한대
  // moveDecider에 의해 움직임 결정한다
  moveBy(moveDecider) {
    if (moveDecider.canMove()) {
      this.#distance++;
    }
  }

  /**
   *
   * @returns {CarDto}
   */
  makeCarDto() {
    return new CarDto(this.#name, this.#distance);
  }

  /**
   *
   * @returns {WinnerDto}
   */

  makeWinnerDto() {
    return new WinnerDto(this.#name, this.#distance);
  }
}

export default Car;

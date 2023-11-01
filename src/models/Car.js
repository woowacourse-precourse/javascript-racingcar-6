/**
 * Car 정보를 담고 있는 클래스
 * @property {string} name - 자동차 이름
 * @property {number} numberOfAdvance - 전진 횟수
 */
class Car {
  /** @type {string} */
  #name;

  /** @type {number} */
  #numberOfAdvance;

  /**
   * 생성자
   * @param {string} name - 자동차 이름
   * @param {number} numberOfAdvance - 전진 횟수
   */
  constructor(name = '', numberOfAdvance = 0) {
    this.#name = name;
    this.#numberOfAdvance = numberOfAdvance;
  }

  /**
   * 자동차 이름 반환
   * @returns {string} 자동차 이름
   */
  getName() {
    return this.#name;
  }

  /**
   * 전진 횟수 반환
   * @returns {number} 전진 횟수
   */
  getNumberOfAdvance() {
    return this.#numberOfAdvance;
  }

  /**
   * 전진 횟수 증가
   * @param {boolean} canCarAdvance - 자동차가 전진할 수 있는지 여부
   */
  advance(canCarAdvance) {
    if (canCarAdvance) {
      this.#numberOfAdvance += 1;
    }
  }
}

export default Car;
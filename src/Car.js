class Car {

  /** @type {String} */
  #name = null;

  #distance = 0;

  /**
   * 객체 생성 시, 입력 받은 문자열을 Car의 name으로 저장한다.
   * @param {String} name 
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * 이동 거리를 1만큼 증가시킨다.
   */
  move() {
    this.#distance++;
    console.log(`\t\t${this.#name} : ${this.#distance}`);
  }
}

export default Car;

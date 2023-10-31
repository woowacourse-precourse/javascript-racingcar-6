class Cars {
  #cars;

  #movings;

  #turns;

  /**
   *
   * @returns {string[]} cars
   */
  getCars() {
    return this.#cars;
  }

  /**
   * 입력 받은 차량 정보를 배열로 저장합니다.
   * @param {string[]} carList
   */
  setCars(carList) {
    this.#cars = carList;
  }

  /**
   *
   * @returns {{[key: string]: number}} movings
   */
  getMovings() {
    return this.#movings;
  }

  /**
   * 각 차량 움직인 거리를 객체 형식 데이터로 저장합니다.
   * @param {{[key: string]: number}} moving
   */
  setMovings(moving) {
    this.#movings = moving;
  }

  /**
   *
   * @returns {number} turns
   */
  getTurns() {
    return this.#turns;
  }

  /**
   * 게임 진행 횟수를 저장합니다.
   * @param {number} number
   */
  setTurns(number) {
    this.#turns = number;
  }
}

export default Cars;

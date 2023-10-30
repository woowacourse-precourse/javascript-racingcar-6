class Cars {
  #cars;

  #movings = [];

  #turns;

  constructor(turns) {
    this.#turns = turns;
  }

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

  getMovings() {
    return this.#movings;
  }

  /**
   * 각 차량 움직인 거리를 객체 형식 데이터로 저장합니다.
   * @param {{[key: string]: number}} moving
   */
  setMovings(moving) {
    this.#movings.push(moving);
  }

  getTurns() {
    return this.#turns;
  }
}

export default Cars;

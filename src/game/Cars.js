/**
 * 자동차 경주 게임에 참가하는 n 대의 자동차
 */
export class Cars {
  #list = [];

  constructor(cars) {
    this.#list = cars;
  }

  getList() {
    return this.#list;
  }

  getPositions() {
    return this.#list.map((car) => car.getPosition());
  }

  move() {
    this.#list.forEach((car) => {
      car.move();
    });
  }
}

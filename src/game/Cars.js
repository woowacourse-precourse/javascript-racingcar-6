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

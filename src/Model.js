class Model {
  constructor() {
    this.cars = new Map();
  }

  getCars() {
    return this.cars;
  }

  addCar(name) {
    if (!this.cars.has(name)) {
      this.cars.set(name, 0);
      return;
    }
    throw new Error('[ERROR] 이미 존재하는 자동차입니다.');
  }

  increaseMoveCntByName(name) {
    if (this.cars.has(name)) {
      const moveCnt = this.cars.get(name);
      return this.cars.set(name, moveCnt + 1);
    } else {
      throw new Error('[ERROR] 존재하지 않는 자동차입니다.');
    }
  }
}

export default Model;

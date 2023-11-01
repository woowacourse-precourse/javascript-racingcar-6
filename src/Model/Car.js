import Generator from './Generator.js';

class Car {
  /**
   * 자동차 이름
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  addDistance() {
    const isAdd = Generator.isAddGenerator();

    if (isAdd) this.distance += 1;
  }
}

export default Car;

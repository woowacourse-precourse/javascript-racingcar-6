import Generator from './Generator.js';

class Car {
  /**
   *
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

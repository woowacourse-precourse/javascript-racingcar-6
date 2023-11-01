import Car from './Car.js';

class Garage {
  #carList = [];

  constructor(nameList) {
    nameList.forEach((name) => {
      this.#registerCar(name);
    });
  }

  #registerCar(name) {

  }
}
export default Garage;
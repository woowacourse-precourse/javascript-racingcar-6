import Car from './Car.js';

class Garage {
  #carList = [];

  constructor(nameList) {
    nameList.forEach((name) => {
      this.#registerCar(name);
    });
  }

  #registerCar(name) {
    this.#carList.push(new Car(name));
  }
}
export default Garage;
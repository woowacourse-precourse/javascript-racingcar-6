import Car from './car/Car';

class App {
  constructor() {
    this.cars = [];
  }

  createCar(nameString) {
    const nameArr = nameString.split(',');

    nameArr.forEach((name) => {
      const newCar = new Car(name);
      this.cars.push(newCar);
    });
  }

  async play() {}
}

export default App;

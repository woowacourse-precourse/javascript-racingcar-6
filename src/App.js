import Print from "./Print.js";
import Car from "./Car.js";

class App {
  constructor() {
    this.carInstanceArray = [];
    this.tryCount = 0;
  }

  async play() {
    await this.setInitialState();
  }

  async setInitialState() {
    await this.getRacingCars();
    await this.getTryCount();
  }

  async getRacingCars() {
    const cars = await Print.getCars();
    this.carInstanceArray = cars.map((carName) => new Car(carName));
  }

  async getTryCount() {
    this.tryCount = await Print.getTryCount();
  }
}

export default App;

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
    const cars = await Print.getCars();
    this.tryCount = await Print.getTryCount();
    this.carInstanceArray = cars.map((carName) => new Car(carName));
  }
}

export default App;

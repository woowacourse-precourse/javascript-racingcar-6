import Print from "./Print.js";
import Car from "./Car.js";

class App {
  constructor() {
    this.carInstanceArray = [];
    this.tryCount = 0;
  }

  async play() {
    await this.setInitialState();
    this.startRace();
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

  startRace() {
    for (let count = 0; count < this.tryCount; count++) {
      this.getResultOfEachCar();
    }
  }

  getResultOfEachCar() {
    for (let i = 0; i < this.carInstanceArray.length; i++) {
      this.carInstanceArray[i].decideGo();
    }
  }
}

export default App;

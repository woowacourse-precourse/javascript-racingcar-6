import Print from "./Print.js";
import Car from "./Car.js";
import Calculate from "./Calculate.js";

class App {
  constructor() {
    this.carInstanceArray = [];
    this.tryCount = 0;
  }

  async play() {
    await this.setInitialState();
    this.startRace();
    this.pickOutWinner();
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
    Print.showResultPhrase();

    for (let count = 0; count < this.tryCount; count++) {
      this.getResultOfEachCar();
      Print.showEmptyNewLine();
    }
  }

  getResultOfEachCar() {
    for (let i = 0; i < this.carInstanceArray.length; i++) {
      const currentCar = this.carInstanceArray[i];
      currentCar.decideGo();
      const [name, result] = currentCar.getCurrentCarState();

      Print.showRaceResult(name, result);
    }
  }

  pickOutWinner() {
    const calculate = new Calculate(this.carInstanceArray);
    calculate.calcWinners();
    const winners = calculate.getWinners();

    Print.showWinners(winners);
  }
}

export default App;

import Print from "./Print.js";
import Calculate from "./Calculate.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";

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
    const enteredCars = await Print.getCars();

    const validate = new Validate();
    validate.checkEnteredCarsIsValid(enteredCars);

    const cars = Utils.getCarNameArray(enteredCars);

    validate.checkEachOfCarsIsValid(cars);

    this.carInstanceArray = Utils.getEachCarInstanceArray(cars);
  }

  async getTryCount() {
    this.tryCount = await Print.getTryCount();
    const validate = new Validate();
    validate.checkTryCountIsValid(this.tryCount);
  }

  startRace() {
    Print.showResultPhrase();

    for (let count = 0; count < this.tryCount; count++) {
      this.getResultOfEachCar();
      Print.showEmptyNewLine();
    }
  }

  getResultOfEachCar() {
    this.carInstanceArray.forEach((currentCar) => {
      const randomNumber = Utils.getRandomNumber();
      currentCar.decideGo(randomNumber);
      const [name, result] = currentCar.getCurrentCarState();

      Print.showRaceResult(name, result);
    });
  }

  pickOutWinner() {
    const calculate = new Calculate(this.carInstanceArray);
    calculate.calcWinners();
    const winners = calculate.getWinners();

    Print.showWinners(winners);
  }
}

export default App;

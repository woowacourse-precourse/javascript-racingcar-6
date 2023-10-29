import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";
import {
  getCarNameMessage,
  getLoopNumberMessage,
  lineBreakMessage,
  winnerMessage,
} from "./Messages/Message";
import {
  carNameLengthError,
  carNameDuplicateError,
  loopNumberTypeError,
} from "./Messages/Error";

class App {
  constructor() {
    this.cars = [];
    this.carNames = [];
    this.loopNumber = 0;
  }

  checkValidName(name) {
    if (name.length === 0 || name.length > 5) {
      carNameLengthError();
    }
    if (this.carNames.includes(name)) {
      carNameDuplicateError();
    }
  }

  async getCar() {
    getCarNameMessage();
    const inputCarName = await Console.readLineAsync().then((res) =>
      res.split(",")
    );
    inputCarName.forEach((name) => {
      this.checkValidName(name);
      const newCar = new Car(name);
      this.carNames.push(name);
      this.cars.push(newCar);
    });
  }

  checkValidType(inputNumber) {
    if (Number.isNaN(+inputNumber)) {
      loopNumberTypeError();
    }
  }

  async getLoopNumber() {
    getLoopNumberMessage();
    const inputNumber = await Console.readLineAsync();
    this.checkValidType(inputNumber);
    this.loopNumber = inputNumber;
  }

  processRound() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  printWinner() {
    const maxCount = Math.max(...this.cars.map((car) => car.countMove));
    const winnerArray = this.cars
      .filter((car) => car.countMove === maxCount)
      .map((car) => car.name);
    winnerMessage(winnerArray.join(", "));
  }

  async play() {
    await this.getCar();
    await this.getLoopNumber();
    lineBreakMessage();
    for (let loop = 0; loop < this.loopNumber; loop += 1) {
      this.processRound();
      lineBreakMessage();
    }
    this.printWinner();
  }
}

export default App;

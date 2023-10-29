import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";
import {
  getCarNameMessage,
  getRoundNumberMessage,
  lineBreakMessage,
  winnerMessage,
} from "./Messages/Message";
import {
  carNameLengthError,
  carNameDuplicateError,
  roundNumberTypeError,
} from "./Messages/Error";

class App {
  constructor() {
    this.cars = [];
    this.carNames = [];
    this.roundNumber = 0;
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
      roundNumberTypeError();
    }
  }

  async getRoundNumber() {
    getRoundNumberMessage();
    const inputNumber = await Console.readLineAsync();
    this.checkValidType(inputNumber);
    this.roundNumber = inputNumber;
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
    await this.getRoundNumber();
    lineBreakMessage();
    for (let round = 0; round < this.roundNumber; round += 1) {
      this.processRound();
      lineBreakMessage();
    }
    this.printWinner();
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";
import { GetCarNameMessage } from "./Messages/Message";
import {
  CAR_NAME_DUPLICATE_ERROR,
  CAR_NAME_LENGTH_ERROR,
} from "./Messages/Error";

class App {
  constructor() {
    this.cars = [];
    this.carNames = [];
    this.loopNumber = 0;
  }

  async getCar() {
    GetCarNameMessage();
    const inputCarName = await Console.readLineAsync().then((res) =>
      res.split(",")
    );
    inputCarName.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        CAR_NAME_LENGTH_ERROR();
      }
      if (this.carNames.includes(name)) {
        CAR_NAME_DUPLICATE_ERROR();
      }
      const newCar = new Car(name);
      this.carNames.push(name);
      this.cars.push(newCar);
    });
  }

  async GetLoopNumber() {
    GetLoopNumberMessage();
    const inputNumber = await Console.readLineAsync();
    if (Number.isNaN(+inputNumber)) {
      LOOP_NUMBER_TYPE_ERROR();
    }
    this.loopNumber = inputNumber;
  }

  ProcessRound() {
    this.carArray.forEach((car) => {
      car.Move();
    });
  }

  PrintWinner() {
    let winnerArray = [];
    let maxCount = 0;
    this.carArray.forEach((car) => {
      if (car.countMove > maxCount) {
        winnerArray = [car.name];
        maxCount = car.countMove;
      } else if (car.countMove === maxCount) {
        winnerArray.push(car.name);
      }
    });
    WinnerMessage(winnerArray.join(", "));
  }

  async play() {
    await this.GetCar();
    await this.GetLoopNumber();
    LineBreakMessage();
    for (let loop = 0; loop < this.loopNumber; loop += 1) {
      this.ProcessRound();
      LineBreakMessage();
    }
    this.PrintWinner();
  }
}

export default App;

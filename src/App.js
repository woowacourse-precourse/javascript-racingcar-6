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

  async play() {}
}

export default App;

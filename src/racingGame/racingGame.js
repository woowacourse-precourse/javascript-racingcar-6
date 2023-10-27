import { Console, Random } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import { GMAEVALIDATION } from "../constants/validation.js";
import {
  splitInputCarName,
  checkInputCarNameValidation,
  checkInputTryNumValidation,
  checkinputCarList,
} from "./utils/validation.js";
import Car from "./car.js";

class RacingGame {
  constructor() {
    this.carList = [];
    this.tryNum = 0;
  }
  async start() {
    await this.getCarName();
    await this.getTryNum();
    this.startRacing();
  }

  async getCarName() {
    try {
      const inputCarName = await Console.readLineAsync(GAMEMSG.input_CarName);
      const carNameList = splitInputCarName(inputCarName);
      checkinputCarList(carNameList);
      checkInputCarNameValidation(carNameList);

      console.log(carNameList);
      this.carList = carNameList.map((car) => new Car(car));
    } catch (error) {
      throw error;
    }
  }

  async getTryNum() {
    try {
      const inputTryNum = await Console.readLineAsync(GAMEMSG.input_tryNum);
      checkInputTryNumValidation(inputTryNum);
      this.tryNum = inputTryNum;
    } catch (error) {
      throw error;
    }
  }

  getRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  startRacing() {
    for (let tryCount = 0; tryCount < this.tryNum; tryCount++) {
      this.tryRacing();
      Console.print("\n");
    }
  }
  tryRacing() {
    this.carList.forEach((car) => {
      let randomNum = this.getRandomNum();
      if (randomNum >= GMAEVALIDATION.car_move_condition) {
        car.moveForward += "-";
        car.moveCount += 1;
      }
      Console.print(`${car.name} : ${car.moveForward}`);
    });
  }
}
export default RacingGame;

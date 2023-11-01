import { Console, Random } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import {
  getMaxMove,
  getWinList,
  printResult,
  getRandomNum,
} from "./utils/gameFn.js";
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
    this.maxMove = 0;
  }
  async start() {
    try {
      await this.getCarName();
      await this.getTryNum();
      this.startRacing();
      this.maxMove = getMaxMove(this.carList);
      printResult(getWinList(this.carList, this.maxMove));
    } catch (error) {
      throw error;
    }
  }

  async getCarName() {
    try {
      const inputCarName = await Console.readLineAsync(GAMEMSG.input_CarName);
      const carNameList = splitInputCarName(inputCarName);
      checkinputCarList(carNameList);
      checkInputCarNameValidation(carNameList);
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

  startRacing() {
    for (let tryCount = 0; tryCount < this.tryNum; tryCount++) {
      this.tryRacing();
      Console.print("\n");
    }
  }

  tryRacing() {
    this.carList.forEach((car) => {
      Car.move(car, getRandomNum());
      Car.printMove(car);
    });
  }
}
export default RacingGame;

import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import {
  splitInputCarName,
  checkInputCarNameValidation,
  checkInputTryNumValidation,
  checkinputCarList,
} from "./utils/validation.js";

class RacingGame {
  constructor() {
    this.carList = [];
    this.tryNum = 0;
  }
  async start() {
    await this.getCarName();
    await this.getTryNum();
  }

  async getCarName() {
    try {
      const inputCarName = await Console.readLineAsync(GAMEMSG.input_CarName);
      const carNameList = splitInputCarName(inputCarName);
      checkinputCarList(carNameList);
      checkInputCarNameValidation(carNameList);
      this.carList = carNameList;
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
}
export default RacingGame;

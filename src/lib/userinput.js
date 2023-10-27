// 파일명 : userinput.js
// 설명 : 사용자 입력 관련

import { CAR, RACE } from "./constants/constants.js";
import { Message } from "./lib/message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
  constructor() {
    this.message = new Message();
  }

  async getCarInput() {
    const input = await MissionUtils.Console.readLineAsync(
      `${this.message.carInputMessage}`
    );
    const carArray = input.split(`,`);
    return carArray;
  }

  async getRaceTryInput() {
    const input = await MissionUtils.Console.readLineAsync(
      `${this.message.raceTryInputMessage}`
    );
    return input;
  }

  async validateCarArray(carArray) {
    if (carArray.length < CAR.MIN_CAR_COUNT) {
      throw new Error(`${this.message.carInputErrorMessage4}`);
    }
    if (carArray.length > CAR.MAX_CAR_COUNT) {
      throw new Error(`${this.message.carInputErrorMessage5}`);
    }
    if (carArray.some((car) => car.length > CAR.MAX_NAME_LENGTH)) {
      throw new Error(`${this.message.carInputErrorMessage}`);
    }
    if (carArray.some((car) => car.trim().length === 0)) {
      throw new Error(`${this.message.carInputErrorMessage2}`);
    }
    if (carArray.some((car, index) => carArray.indexOf(car) !== index)) {
      throw new Error(`${this.message.carInputErrorMessage3}`);
    }
  }

  async validateRaceTryInput(raceTryInput) {
    if (raceTryInput.trim().length === 0) {
      throw new Error(`${this.message.raceTryInputErrorMessage4}`);
    }
    if (isNaN(raceTryInput)) {
      throw new Error(`${this.message.raceTryInputErrorMessage}`);
    }
    if (raceTryInput > RACE.MAX_TRY_COUNT) {
      throw new Error(`${this.message.raceTryInputErrorMessage3}`);
    }
    if (raceTryInput < RACE.MIN_TRY_COUNT) {
      throw new Error(`${this.message.raceTryInputErrorMessage2}`);
    }
  }
}

export default UserInput;

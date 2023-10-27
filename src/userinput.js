// 사용자의 입력을 처리하는 클래스
import { MissionUtils } from "@woowacourse/mission-utils";
import { Message } from "./message.js";

class UserInput {
  constructor() {
    this.input = "";
    this.carArray = [];
    this.message = new Message();
  }

  async getUserInputCars() {
    this.input = await MissionUtils.Console.readLineAsync(
      `${this.message.carInputMessage}`
    );
    this.inputTocarArray();
    this.validateCarInput();
    return this.input;
  }

  async validateCarInput() {
    // 자동차 이름은 2개 이상이어야 합니다.
    if (!this.carArray.length || this.carArray.length < 2) {
      throw new Error(this.message.carInputErrorMessage4);
    }
    // 자동차 이름은 10자 이하만 가능합니다.
    if (this.carArray.some((car) => car.length > 5)) {
      throw new Error(this.message.carInputErrorMessage);
    }
    // 자동차 이름은 공백이 될 수 없습니다.
    if (this.carArray.some((car) => car === ""))
      throw new Error(this.message.carInputErrorMessage2);
    // 자동차 이름은 중복될 수 없습니다.
    if (
      this.carArray.some((car, index, array) => array.indexOf(car) !== index)
    ) {
      throw new Error(this.message.carInputErrorMessage3);
    }
  }

  async inputTocarArray() {
    this.carArray = this.input.split(",");
    return this.carArray;
  }
}

export default UserInput;

const test = new UserInput();
test.getUserInputCars();

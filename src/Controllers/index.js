import { Console } from "@woowacourse/mission-utils";
import Model from "../Models/index.js";
import Views from "../Views/index.js";
import * as validate from "../Vaildation/index.js";

class Controllers {
  constructor() {
    this.Model = new Model();
    this.Views = new Views();
  }

  async getUserInput(message) {
    let input = await Console.readLineAsync(message);
    validate.validateNoWhiteSpace(input);

    input = input?.split(",");
    validate.validateDuplicate(input);

    return input;
  }

  async getTryTimes(message) {
    const TIMES = await this.getUserInput(message);
    validate.validateNumberType(TIMES);
    validate.validateNumberLength(...TIMES);
    return TIMES;
  }

  async carMoveCheck(cars, tryTime) {
    for (let i = 0; i < cars.length; i++) {
      validate.validateCarNameLength(cars, i);
      validate.validateCarNameInput(cars, i);
      cars[i] = this.Model.removeWhitespace(cars[i]);
    }

    const initialMovePoint = this.Model.setInitialCarMovePoint(cars);
    const moveResult = this.repeatCarRacing(initialMovePoint, cars, tryTime);

    return { cars, moveResult };
  }

  repeatCarRacing(init, cars, tryTime) {
    let moveResult = init;

    for (let i = 0; i < tryTime; i++) {
      moveResult = this.Model.calculateCarMovePoint(moveResult);

      cars?.forEach((el) => {
        const moved = this.Model.repeatMessage("-", moveResult[el]);
        this.Views.printRacingResult({ el, moved });
      });

      // 각 레이싱 반복 마다 구간 구별을 위한 출력
      this.Views.printCustomMessage("");
    }
    return moveResult;
  }

  selectWinner(result) {
    const Winners = this.Model.getHighestMovePoint(result);
    this.Views.printWinner(Winners);
  }
}

export default Controllers;

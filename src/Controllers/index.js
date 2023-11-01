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
    cars.forEach((_, idx) => {
      validate.validateCarNameLength(cars, idx);
      validate.validateCarNameInput(cars, idx);
      cars[idx] = this.Model.removeWhitespace(cars[idx]);
    });

    const initialMovePoint = this.Model.setInitialCarMovePoint(cars);
    const moveResult = this.repeatCarRacing(initialMovePoint, cars, tryTime);

    return { cars, moveResult };
  }

  repeatCarRacing(init, cars, tryTime) {
    let movePoint = init;

    for (let i = 0; i < tryTime; i++) {
      movePoint = this.Model.calculateCarMovePoint(movePoint);

      cars?.forEach((el) => {
        const moved = this.Model.repeatMessage("-", movePoint[el]);
        this.Views.printRacingResult({ el, moved });
      });
      this.Views.printCustomMessage(""); // 각 레이싱 반복 마다 구간 구별을 위한 출력
    }

    return movePoint;
  }

  selectWinner(result) {
    const Winners = this.Model.getHighestMovePoint(result);
    this.Views.printWinner(Winners);
  }
}

export default Controllers;

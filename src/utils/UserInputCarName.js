import { Console } from "@woowacourse/mission-utils";
import { QUESTION_CAR_NAME, ERROR_WRONG_NAME } from "../const/Messages";

class UserInputCarName {
  constructor() {
    this.members = [];
  }

  async inputCarName() {
    Console.print(QUESTION_CAR_NAME);
    const userInput = await Console.readLineAsync();
    const carNames = userInput.split(",").map((name) => name.trim());

    Console.print(carNames.join(","));
    this.setCarNames(carNames);
  }

  async setupCarPositions() {
    await this.inputCarName();
    const carPositions = {};
    this.members.forEach((carName) => {
      carPositions[carName] = "";
    });
    return carPositions;
  }

  setCarNames(carNames) {
    const carNamesValid = carNames.every((name) => name.length <= 5);
    if (!carNamesValid) {
      throw new Error(ERROR_WRONG_NAME);
    }

    this.members = carNames;
  }

  getCarName() {
    return this.members;
  }
}

export default UserInputCarName;

import { QUESTION_CAR_NAME } from "../const/Messages";

class CarNameManager {
  constructor() {
    this.members = [];
  }

  async inputCarName() {
    Console.print(QUESTION_CAR_NAME);
    const userInput = await Console.readLineAsync();
    const carNames = userInput.split(",").map((name) => name.trim());

    this.setCarNames(carNames);
  }

  setCarNames(carNames) {
    const carNamesValid = carNames.every((name) => name.length <= 5);

    if (!carNamesValid) {
      throw new Error("[ERROR]");
    }

    this.members = carNames;
  }

  getCarName() {
    return this.members.join(",");
  }
}

/* const manager = new CarNameManager();
manager.inputCarName();
Console.print(manager.getCarName()); */

export default CarNameManager;

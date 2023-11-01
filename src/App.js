import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_MESSAGE } from "./Messages.js";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.GAME_START
    );
    if (carNames.split(",").some((name) => name.trim().length > 5)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
    const repeatNumber = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.INPUT_REPEAT_NUMBER
    );
    if (Number.isNaN(Number(repeatNumber))) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    MissionUtils.Console.print(GAME_MESSAGE.GAME_RESULT);
    const carNameArray = carNames.split(",");
    const carObjects = carNameArray.map((name) => ({ [name.trim()]: 0 }));

    for (let i = 0; i < repeatNumber; i++) {
      for (const carObject of carObjects) {
        for (const carName in carObject) {
          this.updateCarObjectBasedOnRandomNumber(carObject);
          const ResultNumber = this.createDashString(carObject, carName);
          MissionUtils.Console.print(carName + " : " + ResultNumber);
        }
      }
      MissionUtils.Console.print("");
    }
    let winCarArr = [];
    let maxValue = 0;

    for (const carObject of carObjects) {
      for (const carName in carObject) {
        const advanceValue = carObject[carName];
        if (advanceValue > maxValue) {
          winCarArr = [];
          winCarArr.push(carName);
          maxValue = advanceValue;
        } else if (advanceValue === maxValue && !winCarArr.includes(carName)) {
          winCarArr.push(` ${carName}`);
        }
      }
    }
    MissionUtils.Console.print(GAME_MESSAGE.GAME_WINNER + winCarArr);
  }

  updateCarObjectBasedOnRandomNumber(carObject) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (randomNumber > 3) {
      for (const carName in carObject) {
        carObject[carName]++;
      }
    }
    return carObject;
  }

  createDashString(carObject, carName) {
    let ResultNumber = "";
    for (let i = 0; i < carObject[carName]; i++) {
      ResultNumber = ResultNumber.concat("-");
    }
    return ResultNumber;
  }
}

export default App;

import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameCheck } from "../validValueCheck/index.js";
import { MESSAGE } from "../constants/message.js";

class Input {
  async getCarName() {
    try {
      const inputCarName = await MissionUtils.Console.readLineAsync(MESSAGE.inputCar);
      const carNameArray = inputCarName.split(",");
      await carNameCheck(carNameArray);
      return carNameArray;
    } catch (error) {
      throw error;
    }
    
  }
  async getRacingNumber() {
    try {
      const racingNumber = await MissionUtils.Console.readLineAsync(MESSAGE.inputNum);
      return racingNumber;
    } catch (error) {
      throw error;
    }
  }
}
export default Input;
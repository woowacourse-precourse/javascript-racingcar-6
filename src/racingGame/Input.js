import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameCheck } from "../validValueCheck/index.js";

class Input {
  async getCarName() {
    try {
      const inputCarName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const carNameArray = inputCarName.split(",");
      await carNameCheck(carNameArray);
      return carNameArray;
    } catch (error) {
      throw error;
    }
    
  }
  async getRacingNumber() {
    try {
      const racingNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      return racingNumber;
    } catch (error) {
      throw error;
    }
  }
}
export default Input;
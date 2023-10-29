import { Console } from "@woowacourse/mission-utils";
import RacingCar from "./components/RacingCar.js";
import Messages from "./constants/Messages.js";

class App {
  async play() {
    const inputName = await Console.readLineAsync(Messages.INPUT_NAME);
    const inputNameArray = inputName.split(",");
    if (!inputName.length) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요");
    }
    for (let i = 0; i < inputNameArray.length; i++) {
      if (inputNameArray[i].includes(" ")) {
        throw new Error("[ERROR] 띄어쓰기 안 됩니다");
      }
      if (inputNameArray[i].length > 5) {
        throw new Error("[ERROR] 이름은 5자 이하로만 써주세요");
      }
    }
    const inputNumber = Number(await Console.readLineAsync(Messages.INPUT_NUMBER));
    if (!Number.isInteger(inputNumber) || inputNumber < 1) {
      throw new Error("[ERROR] 1이상 정수로 적어주세요");
    }
    const racingCar = new RacingCar(inputNameArray, inputNumber);
    racingCar.output();
  }
}

export default App;

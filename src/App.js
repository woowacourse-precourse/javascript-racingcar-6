import { MissionUtils } from "@woowacourse/mission-utils";
import { Message, ErrorMessage } from "../constants/Message";
class App {
  async play() {
    const namesInput = await MissionUtils.Console.readLineAsync(Message.INIT);
    const carsName = namesInput.split(",");
    checkCarsName(carsName);
    const tryNum = await MissionUtils.Console.readLineAsync(Message.TRYNUMBER);
    checkTryNum(tryNum);
  }
}

const checkCarsName = (carsName) => {
  carsName.map((item) => {
    if (item.length > 5 || item.length < 1) {
      throw new Error(ErrorMessage.INPUTCARNAME);
    }
  });
};

const checkTryNum = (tryNum) => {
  if (isNaN(Number(tryNum))) {
    throw new Error(ErrorMessage.INPUTNUMBER);
  }
};

export default App;

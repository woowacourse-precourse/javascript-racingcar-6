import { MissionUtils } from "@woowacourse/mission-utils";
import { Message, ErrorMessage } from "../constants/Message";
class App {
  async play() {
    const namesInput = await MissionUtils.Console.readLineAsync(Message.INIT);
    const carsName = namesInput.split(",");
    InputTest(carsName);
  }
}

const InputTest = (carsName) => {
  carsName.map((item) => {
    if (item.length > 5 || item.length < 1) {
      throw new Error(ErrorMessage.InputCarName);
    }
  });
};

export default App;

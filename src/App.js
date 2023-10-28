import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/Message";
import CarNameValidator from "./validate/CarNameValidator";

class App {
  async play() {
    Console.print(GAME_MESSAGE.inputName);
    const carNames = await Console.readLineAsync("");

    CarNameValidator.namesvalidate(carNames);

    Console.print(GAME_MESSAGE.inputNumber);
    const raceTrial = await Console.readLineAsync("");
  }
}

export default App;
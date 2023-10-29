import { Console } from "@woowacourse/mission-utils";
import CarList from "./CarList.js";
import MESSAGE from "./constants/message.js";

class App {
  async play() {
    Console.print(MESSAGE.INPUT_CARNAME_MSG);
    const carInput = await Console.readLineAsync("");
    const carList = new CarList();
    await carList.setCarList(carInput);
    const tryNumber = await this.getTryNumber();

    Console.print(MESSAGE.END_GAME_MSG);
    carList.printCarListScore(tryNumber);
    carList.printFinalResult();
  }

  async getTryNumber() {
    Console.print(MESSAGE.INPUT_TRYNUMBER_MSG);
    const tryNumber = await Console.readLineAsync("");
    return tryNumber;
  }
}

export default App;

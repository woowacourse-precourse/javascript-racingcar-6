import { Console } from "@woowacourse/mission-utils";
import { RacingCar } from "./components/RacingCar.js";
import { ValidateInput } from "./components/ValidateInput.js";
import Messages from "./constants/Messages.js";

class App {
  async play() {
    const inputNameArray = await this.InputName();
    const inputNumber = await this.InputNumber();

    const racingCar = new RacingCar(inputNameArray, inputNumber);
    racingCar.output();
  }

  async InputName() {
    const inputName = await Console.readLineAsync(Messages.INPUT_NAME);
    const inputNameArray = inputName.split(",");
    new ValidateInput().name(inputName, inputNameArray);
    return inputNameArray;
  }

  async InputNumber() {
    const inputNumber = Number(await Console.readLineAsync(Messages.INPUT_NUMBER));
    new ValidateInput().number(inputNumber);
    return inputNumber;
  }
}

export default App;

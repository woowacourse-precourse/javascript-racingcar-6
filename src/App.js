import { Console } from "@woowacourse/mission-utils";
import { RacingCar } from "./components/RacingCar.js";
import { ValidateInput } from "./components/ValidateInput.js";
import Messages from "./constants/Messages.js";

class App {
  async play() {
    const validator = new ValidateInput();

    const inputName = await Console.readLineAsync(Messages.INPUT_NAME);
    const inputNameArray = inputName.split(",");
    validator.name(inputName, inputNameArray);

    const inputNumber = Number(await Console.readLineAsync(Messages.INPUT_NUMBER));
    validator.number(inputNumber);

    const racingCar = new RacingCar(inputNameArray, inputNumber);
    racingCar.output();
  }
}

export default App;

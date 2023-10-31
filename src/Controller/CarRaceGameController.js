import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";

class CarRaceGameController {
  async InputRaceCarName() {
    await Input.readInputRaceCarName((input) => {
      Console.print(input);
    });
  }
}

export default CarRaceGameController;

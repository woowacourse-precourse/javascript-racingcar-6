import {
  Console,
  Random,
} from "@woowacourse/mission-utils";

import isValidName from "./isValidName.js"
import getCarName from "./getCarName.js"

class App {
  async play() {

    const userInput = await getCarName();

    const carNameArray = isValidName(userInput);

    Console.print(carNameArray)
  }
}

export default App;

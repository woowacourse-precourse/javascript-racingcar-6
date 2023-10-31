import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    // const userInput = await this.getUserInput();
    // this.printMessage(msg)
    // const array = this.splitStringToArrayByComma(string)

  }
  
  async getUserInput() {
    const input = await Console.readLineAsync(message.starting)
    return input
  }

  printMessage(message) {
    Console.print(message)
  }

  splitStringToArrayByComma(string) {
    const array = string.split(',')
    return array
  }

  checkIsStringBelow5(string) {
    if (string.length > 5) {
      throw console.error(message.InputValidationError);
    } else {
      string
    }
  }

}



export default App;

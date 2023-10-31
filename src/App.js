import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    const userInput = await this.getUserInput();
    const msg =  'test'
    this.printMessage(msg)
  }
  
  async getUserInput() {
    const input = await Console.readLineAsync(message.starting)
    return input
  }

  printMessage(message) {
    Console.print(message)
  }
}



export default App;

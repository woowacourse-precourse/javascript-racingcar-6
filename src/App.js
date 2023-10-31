import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    const userInput = await this.getUserInput();
  }
  
  async getUserInput() {
    const input = await Console.readLineAsync(message.starting)
    return input
  }
}




export default App;

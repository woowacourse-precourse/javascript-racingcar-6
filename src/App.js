import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    // const userInput = await this.getUserInput();
    // this.printMessage(msg)
    const string = 'car, test, fake'
    const array = this.splitStringToArrayByComma(string)
    console.log(array)
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


}



export default App;

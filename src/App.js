import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    // const userInput = await this.getUserInput();
    // this.printMessage(msg)
    // const array = this.splitStringToArrayByComma(string)
    const testingArray = ['fake', 'test', 'testing']
    checkIsAllElementsFitCondition(testingArray)
  }
}

async function getUserInput() {
  const input = await Console.readLineAsync(message.starting)
  return input
}

function printMessage(message) {
  Console.print(message)
}

function splitStringToArrayByComma(string) {
  const array = string.split(',')
  return array
}

function checkIsAllElementsFitCondition(array) {
  array.map(element => checkStringLengthBelow5(element))
}

function checkStringLengthBelow5(string) {
  if (string.length < 5) {
    throw console.error(message.inputValidationError);
  }
}

export default App;

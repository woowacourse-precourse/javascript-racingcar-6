import { Console } from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    const userInput = await getUserInput(message.starting)
    const carNameArray = processInput(userInput)
    console.log(carNameArray) 
  }
}

async function getUserInput(message) {
  const input = await Console.readLineAsync(message)
  return input
}

function processInput(input) {
  const userInput = new UserInput(input)
    .splitStringToArrayBy(',')
    .checkIsAllElementsFitCondition(5);
  return userInput.array
}


class UserInput{
  constructor(input) {
    this.input = input
    this.array = []
  }
  
  splitStringToArrayBy(splitter) {
    this.array = this.input.split(splitter)
    return this
  }

  checkIsAllElementsFitCondition(condition) {
    this.array.map(element => this.checkStringLengthBelow(condition,element))
    return this
  }
  
  checkStringLengthBelow(condition, string) {
    if (string.length > condition) {
      throw console.error(message.inputValidationError);
    }
  }
}

function printMessage(message) {
  Console.print(message)
}


export default App;

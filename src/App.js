import { Console, Random} from "@woowacourse/mission-utils";
import message from "./util/Message.js"


class App {
  async play() {
    const userInput = await getUserInput(message.notifyStarting)
    const carNameArray = processInput(userInput)
    const racingRounds = await getUserInput(message.askRounds)
    
    const condition = { low:0, high:9, criteria:4};
    // racing car 생성
    
    // const testRacingCar = new RacingCars('name',condition)
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


class RacingCars {
  constructor(carName, condition) {
    this.carName = carName
    this.condition = condition
  }
  checkIsMoveForward() {
    const {low,high,criteria} = this.condition
    return this.getRandomNumber({ low, high }) > criteria
      ? true
      : false
  }

  getRandomNumber({ low,high }) {
    return Random.pickNumberInRange(low, high);
  }
}

function printMessage(message) {
  Console.print(message)
}


export default App;

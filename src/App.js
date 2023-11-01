import { Console, Random} from "@woowacourse/mission-utils";
import message from "./Message.js"

class App {
  async play() {
    const userInput = await getUserInput(message.notifyStarting);
    const carNameArray = processInput(userInput);

    const CONDITION = { low: 0, high: 9, operator: 'more', criteria: 4 }
    const racingCars = carNameArray.map(element => new RacingCar(element, CONDITION));     
    
    let racingRounds = await getUserInput(message.askRounds);
    printMessage(message.progress);
    while (racingRounds --) {
      racingCars.forEach(racingCar => {
        racingCar.tryMoveForward();
        racingCar.showProgress();
      })
      printMessage("");
    }

    const winners = pickWinner(racingCars);
    printMessage(message.showWinner + winners);
  }
}

async function getUserInput(message) {
  const input = await Console.readLineAsync(message);

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
    this.input = input;
    this.array = [];
  }
  
  splitStringToArrayBy(splitter) {
    this.array = this.input.split(splitter);

    return this
  }

  checkIsAllElementsFitCondition(condition) {
    this.array.map(element => this.checkStringLengthBelow(condition, element));
    
    return this
  }
  
  checkStringLengthBelow(condition, string) {
    if (string.length > condition) {
      throw new Error (message.inputValidationError);
    }
  }
}

function pickWinner(racingCars) {
  const maxProgress = Math.max(...racingCars.map(racingCar => racingCar.progress));

  const winners = racingCars
    .filter(racingCar => racingCar.progress === maxProgress)
    .map(racingCar => racingCar.carName)
    .join(', ');
  
  return winners
}

class RacingCar {
  constructor(carName, condition) {
    this.carName = carName;
    this.condition = condition;
    this.progress = 0;
  }

  tryMoveForward() {
    this.checkIsMoveForward() && (this.progress ++)
  }

  checkIsMoveForward() {
    const { low, high, criteria, operator } = this.condition;
    const randomNumber = this.getRandomNumber(low, high)
    const operatorSelector = {
      'below': (randomNumber, criteria) => randomNumber <= criteria,
      'more': (randomNumber, criteria) => randomNumber >= criteria,
      'over': (randomNumber, criteria) => randomNumber > criteria,
      'under': (randomNumber, criteria) => randomNumber < criteria
    }
    return operatorSelector[operator](randomNumber, criteria);
  }

  getRandomNumber(low, high) {
    return Random.pickNumberInRange(low, high);
  }
  
  showProgress() {
    printMessage(`${this.carName} : ${'-'.repeat(this.progress)}`);
  }
}

function printMessage(message) {
  Console.print(message);
}


export default App;

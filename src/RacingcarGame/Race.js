import UserInput from './User.js';
import { print, pickNumberInRange } from '../common/utils.js';
import validateCarName from '../validates/carName.js';
import validateAttemptCount from '../validates/attemptCount.js';
import MESSAGE from '../common/message.js';

class Race {
  constructor() {
    this.userInput = new UserInput();
    this.raceCars = [];
  }

  async arrayToObjects() {
    const inputCarName = await this.userInput.inputCarName();
    const carNameArray = validateCarName(inputCarName);

    for (let i = 0; i < carNameArray.length; i += 1) {
      const participant = { name: carNameArray[i], distance: 0 };
      this.raceCars.push(participant);
    }
  }

  gameRound() {
    for (let i = 0; i < this.raceCars.length; i += 1) {
      if (pickNumberInRange(0, 9) >= 4) {
        this.raceCars[i].distance += 1;
      }

      let bar = '';
      for (let j = 0; j < this.raceCars[i].distance; j += 1) {
        bar += MESSAGE.forword;
      }

      print(`${this.raceCars[i].name} : ${bar}`);
    }
  }

  async repeatNTimes() {
    const inputTimes = await this.userInput.inputAttemptCount();
    const attemptCount = validateAttemptCount(inputTimes);
    print(`\n${MESSAGE.result}`);

    for (let i = 0; i < attemptCount; i += 1) {
      this.gameRound();
      print('');
    }
  }
}

export default Race;

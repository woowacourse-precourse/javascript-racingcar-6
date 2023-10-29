import { Console, Random } from '@woowacourse/mission-utils';
import { message, error, num } from './Constants.js';

class App {
  async play() {}

  async getRacecarNameInput() {
    const racecarNameInput = await Console.readLineAsync(message.ASK_RACECAR_NAMES);

    const isValid = await this.checkRacecarNameValidity(racecarNameInput);

    if (isValid) {
      return isValid;
    } else {
      throw new Error(error.NOT_VALID_NAME);
    }
  }

  // check validity of racecarNameInput & if valid, return them as items in an array
  async checkRacecarNameValidity(racecarNameInput) {
    const names = racecarNameInput.split(',').map((item) => item.trim());

    const isProperLength = names.every((item) => item.length <= num.NAME_LENGTH_LIMIT);

    const isNotEmpty = names.every((item) => item.length > 0);

    const isWithoutSpaces = names.every((item) => !item.includes(' '));

    const isWithoutRecurrences = names.length === [...new Set(names)].length;

    return isProperLength && isNotEmpty && isWithoutSpaces && isWithoutRecurrences ? names : false;
  }

  async getAttemptInput() {
    const attemptInput = await Console.readLineAsync(message.ASK_ATTEMPT_NUMBER);

    const isValid = await this.checkAttemptValidity(attemptInput);

    if (isValid) {
      return Number(attemptInput);
    } else {
      throw new Error(error.NOT_A_NUMBER);
    }
  }

  async checkAttemptValidity(attemptInput) {
    return /^\d+$/.test(attemptInput);
  }

  generateResultTemplate(racecarNames) {
    const template = racecarNames.reduce((acc, cur) => {
      acc.push(`${cur} : `);
      return acc;
    }, []);

    return template;
  }

  generateAdvanceConditions(racecarNames) {
    const advanceConditions = [];

    for (let i = 0; i < racecarNames; i++) {
      advanceConditions.push(Random.pickNumberInRange(num.LOWER_LIMIT, num.UPPER_LIMIT));
    }

    return advanceConditions;
  }

  async printFinalResult(finalWinner) {
    Console.print(`${message.FINAL_WINNER}${finalWinner.join(', ')}`);
  }
}

export default App;

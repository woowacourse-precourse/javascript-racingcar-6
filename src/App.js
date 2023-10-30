import { Console, Random } from '@woowacourse/mission-utils';
import { message, error, num } from './Constants.js';

class App {
  async play() {
    const racecarNames = await this.getRacecarNameInput();

    const attempts = await this.getAttemptInput();

    Console.print('\n' + message.RESULTS);

    let template = this.generateResultTemplate(racecarNames);

    await this.repeatProcess(attempts, template);

    await this.printFinalResult(template);
  }

  async getRacecarNameInput() {
    const racecarNameInput = await Console.readLineAsync(message.ASK_RACECAR_NAMES);

    // split the inputs by "," and trim any possible whitespaces
    const names = racecarNameInput.split(',').map((item) => item.trim());

    const isValid = await this.checkRacecarNameValidity(names);

    if (isValid) {
      return names;
    } else {
      throw new Error(error.NOT_VALID_NAME);
    }
  }

  // check validity of racecarNameInput & if valid, return them as items in an array
  async checkRacecarNameValidity(names) {
    const isProperLength = names.every((item) => item.length <= num.NAME_LENGTH_LIMIT);

    const isNotEmpty = names.every((item) => item.length > 0);

    const isWithoutSpaces = names.every((item) => !item.includes(' '));

    const isWithoutRecurrences = names.length === [...new Set(names)].length;

    return isProperLength && isNotEmpty && isWithoutSpaces && isWithoutRecurrences ? true : false;
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
    return /^[1-9]\d*$/.test(attemptInput);
  }

  generateResultTemplate(racecarNames) {
    const template = racecarNames.reduce((acc, cur) => {
      acc.push(`${cur} : `);
      return acc;
    }, []);

    return template;
  }

  async repeatProcess(attempts, template) {
    for (let i = 0; i < attempts; i++) {
      const advanceConditions = this.generateAdvanceConditions(template);

      template = this.updateResult(template, advanceConditions);

      Console.print(template.join('\n') + '\n');
    }
  }

  generateAdvanceConditions(racecarNames) {
    const advanceConditions = [];

    for (let i = 0; i < racecarNames.length; i++) {
      advanceConditions.push(Random.pickNumberInRange(num.LOWER_LIMIT, num.UPPER_LIMIT));
    }

    return advanceConditions;
  }

  updateResult(template, advanceConditions) {
    const updated = template.map((item, idx) =>
      advanceConditions[idx] >= num.ADVANCE_IF_GREATER_THAN ? (item += '-') : item
    );

    return updated;
  }

  printUpdateResult(updated) {
    Console.print(updated.join('\n'));
  }

  async determineWinner(result) {
    const winners = [];

    const maxLength = Math.max(...result.map((item) => item.length));

    result.filter((item) => {
      if (item.length === maxLength) {
        return winners.push(item);
      }
    });

    return winners;
  }

  async printFinalResult(finalWinner) {
    Console.print(`${message.FINAL_WINNER}${finalWinner.join(', ')}`);
  }
}

export default App;

const {
  Console,
  READ_RACING_CAR_NAMES,
  ERROR_MORE_THAN_TWO_CARS,
  ERROR_NOT_MORE_THAN_FIVE_CHARACTERS,
  READ_NUMBER_OF_ATTEMPTS,
  ERROR_ATTEMPT_COUNT,
} = require('./Constant');

const InputView = {
  async readCarNames() {
    const answer = await Console.readLineAsync(READ_RACING_CAR_NAMES);
    const answerArray = answer.split(',');
    this.validatorCarNames(answerArray);

    return answerArray;
  },

  validatorCarNames(names) {
    if (names.length === 1) {
      throw new Error(ERROR_MORE_THAN_TWO_CARS);
    }

    names.map(item => {
      if (item.length === 0) {
        throw new Error(ERROR_MORE_THAN_TWO_CARS);
      }

      if (item.length > 5) {
        throw new Error(ERROR_NOT_MORE_THAN_FIVE_CHARACTERS);
      }
    });
  },

  async readAttemptCounts() {
    const answer = await Console.readLineAsync(READ_NUMBER_OF_ATTEMPTS);
    const answerNumber = Number(answer);
    this.validatorAttemptCount(answerNumber);

    return answerNumber;
  },

  validatorAttemptCount(count) {
    if (isNaN(count) || count < 0 || count === 0) {
      throw new Error(ERROR_ATTEMPT_COUNT);
    }
  },
};

module.exports = InputView;

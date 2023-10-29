const {
  Console,
  READ_RACING_CAR_NAMES,
  ERROR_MORE_THAN_TWO_CARS,
  ERROR_NOT_MORE_THAN_FIVE_CHARACTERS,
  READ_NUMBER_OF_ATTEMPTS,
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
  },
};

module.exports = InputView;

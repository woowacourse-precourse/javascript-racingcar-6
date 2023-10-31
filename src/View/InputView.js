const {
  Console,
  READ_RACING_CAR_NAMES,
  ERROR_MORE_THAN_TWO_CARS,
  ERROR_NOT_MORE_THAN_FIVE_CHARACTERS,
  READ_NUMBER_OF_TRYS,
  ERROR_TRY_COUNT,
} = require('../Constant');

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

    names.forEach(item => {
      if (item.length === 0) {
        throw new Error(ERROR_MORE_THAN_TWO_CARS);
      }

      if (item.length > 5) {
        throw new Error(ERROR_NOT_MORE_THAN_FIVE_CHARACTERS);
      }
    });
  },

  async readTryCounts() {
    const answer = await Console.readLineAsync(READ_NUMBER_OF_TRYS);
    const answerNumber = Number(answer);
    this.validatorTryCount(answerNumber);

    return answerNumber;
  },

  validatorTryCount(count) {
    if (isNaN(count) || count < 0 || count === 0) {
      throw new Error(ERROR_TRY_COUNT);
    }
  },
};

module.exports = InputView;

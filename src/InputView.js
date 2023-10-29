const { Console, READ_RACING_CAR_NAMES, ERROR_MORE_THAN_TWO_CARS } = require('./Constant');

const InputView = {
  async readCarNames() {
    const answer = await Console.readLineAsync(READ_RACING_CAR_NAMES);
    const answerArray = answer.split(',');

    if (answerArray.length === 1) {
      throw new Error(ERROR_MORE_THAN_TWO_CARS);
    }

    answerArray.map(item => {
      if (item.length === 0) {
        throw new Error(ERROR_MORE_THAN_TWO_CARS);
      }
    });

    return answer;
  },
};

module.exports = InputView;

const { Console, READ_RACING_CAR_NAMES } = require('./Constant');

const InputView = {
  async readCarNames() {
    const answer = Console.readLineAsync(READ_RACING_CAR_NAMES);
  },
};

module.exports = InputView;

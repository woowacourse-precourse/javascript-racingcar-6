const { Console, READ_RACING_CAR_NAMES } = require('./Constant');

const InputView = {
  async readCarNames() {
    const answer = await Console.readLineAsync(READ_RACING_CAR_NAMES);

    if (answer.length === 0) {
      throw new Error('[ERROR] 2대 이상의 자동차 이름을 입력해 주세요.');
    }
    return answer;
  },
};

module.exports = InputView;

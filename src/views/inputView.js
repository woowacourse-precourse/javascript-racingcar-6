// inputView.js
const { Console } = require('@woowacourse/mission-utils');

const inputView = {
  getCarNames: async () => {
    return await Console.readLineAsync('자동차 이름을 입력해주세요. (예: pobi,woni,jun)');
  },
  getTryCount: async () => {
    return await Console.readLineAsync('시도할 횟수는 몇회인가요?');
  }
};

module.exports = inputView;

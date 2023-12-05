import { Console } from "@woowacourse/mission-utils";

const INPUT_MESSAGE = Object.freeze({
  getCarNames:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  getTryCount: "시도할 횟수는 몇 회인가요?\n",
});

// 1. 사용자의 입력을 받는다.
const InputView = Object.freeze({
  async getCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.getCarNames);
    return carNames;
  },
  async getTryCount() {
    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.getTryCount);
    return tryCount;
  },
});

export default InputView;

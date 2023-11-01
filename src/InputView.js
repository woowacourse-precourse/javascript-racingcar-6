import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async requestCarNames() {
      const userInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      return userInput.split(',');
    },

  async requestTryCount() {
    const userInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return Number(userInput);
  },
}

export default InputView;
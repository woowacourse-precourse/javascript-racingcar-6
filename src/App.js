import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async inputName() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = userInput.split(",");
    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    return carNames;
  }
  async inputRaceCount() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return userInput;
  }

  async play() {}
}

export default App;

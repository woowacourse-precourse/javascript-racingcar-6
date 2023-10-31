import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    userInput();
  }

  async userInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carName = input.split(',');
      if (!this.areElementsFiveCharactersOrLess(carName)) {
        throw new Error("[ERROR] 5자가 넘는 자동차 이름이 존재합니다.")
      }
      if (!this.areCarNamesUnique(carName)) {
        throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.")
      }
      const cnt = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
    } catch(error) {
      MissionUtils.Console.print(error.message);
      return;
    }
    return carName, cnt;
  }

  areElementsFiveCharactersOrLess(carName) {
    return carName.every(e => e.length <= 5);
  }

  areCarNamesUnique(carName) {
    const uniqueElements = new Set(carName);
    return uniqueElements.size === carName.length;
  }
}

export default App;

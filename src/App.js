import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  start() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분")
  }

  async getCarNames() {
    const names = await Console.readLineAsync();
    const carNamesArray = names.split(',').map(name => name.trim)
    return carNamesArray;
  }
  async play() { }
}

export default App;

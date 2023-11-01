import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let players = await this.inputPlayers();
    const NUMBER = await this.inputNumber();
  }

  async inputPlayers() {
    let players = await Console.readLineSync;
    ("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    players.split(",");
  }
}

export default App;

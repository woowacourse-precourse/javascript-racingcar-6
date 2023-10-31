import { Console } from "@woowacourse/mission-utils";

class App {
  async getUserInput() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = userInput.split(",");
    return carNames;
  }
  async getPlayRound() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const gameRound = Number(input);
    return gameRound;
  }
  async play() {
    const carNames = await this.getUserInput();
    const gameRound = await this.getPlayRound();
  }
}

export default App;

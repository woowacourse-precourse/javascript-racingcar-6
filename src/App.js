import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const arrCarNames = await this.getCarNames();
    const totalRound = await this.getTotalRound();
  }

  async getCarNames(){
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    return input.split(",");
  }

  async getTotalRound(){
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    return Number(input);
  }
}

export default App;

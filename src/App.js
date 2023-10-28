import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const [carsName, gamesNum] = await this.receiveUserInput();
  }

  async receiveUserInput() {
    const carsName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const gamesNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return [carsName, gamesNum];
  }
}

export default App;
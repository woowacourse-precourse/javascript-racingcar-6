import { Console } from "@woowacourse/mission-utils";

class App {
  carNames = [];
  tryNumber = 0;

  async getCarName() {
    const receivedCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = receivedCarNames.split(",");
    Console.print(this.carNames);
  }

  async getTryNumber() {
    const receivedTryNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.tryNumber = Number(receivedTryNumber);
  }

  async play() {
    await this.getCarName();
    await this.getTryNumber();
  }
}

export default App;

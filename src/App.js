import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.roundCount = null;
  }

  async play() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",");
  }
}
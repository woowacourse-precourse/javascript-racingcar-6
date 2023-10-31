import { Random, Console } from "@woowacourse/mission-utils";

const CARNAME_LENGTH = 5;

class App {
  constructor() {
    this.roundCount = null;
  }

  async play() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",");
    this.validateCarNames(carNames);
    }
  
  validateCarNames(carNames) {
    for (let carName of carNames) {
      if (carName.length > CARNAME_LENGTH) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
  };
}
export default App;
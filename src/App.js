import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = [];
    this.playCount;
  }
  
  async play() {
    await this.userInput();

  }

  async userInput() {
    this.carNames = (await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")).split(",");
    this.playCount = (await Console.readLineAsync("시도할 횟수는 몇 회인가요?"));
    this.playCount = Number(this.playCount);
  }

  isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    
    if (randomNumber >= 4) { return true; }
    else { return false; }
  }

}

export default App;

import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.raceCount = "";
  }

  async play() {
    await this.startRacing();
  }

  async startRacing() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분))"
    );
    const carNames = carNamesInput.split(",");
    this.validation(carNames);
    Console.print(carNames);
    const raceCount = Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    Console.print(raceCount);
  }

  validation(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    });
  }

  forwordOrStop() {}

  raceRoundMessage() {
    // 라운드 별 결과 출력
  }

  whoIsWinner() {
    // 최종 우승자 : pobi, jun
  }
}

export default App;

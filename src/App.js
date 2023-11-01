import { Console, Random } from "@woowacourse/mission-utils";

const CAR_NUMBER = 1;
const GAME_TRY = 2;

class App {
  async play() {
    const cars = await this.inputGameInfo(CAR_NUMBER);
    const trial = await this.inputGameInfo(GAME_TRY);
    Console.print("\n실행결과");

    const scores = cars.map((car) => {
      return { name: car, score: 0 };
    });
    this.playRacing(scores, trial);
  }

  validNameConvention(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      count++;
      if (string[i] === ",") {
        count = 0;
        continue;
      }
      if (count > 5) return false;
    }
    return true;
  }

  isNumber(string) {
    if (isNaN(string)) return false;
    return true;
  }

  async inputGameInfo(number) {
    let input;
    switch (number) {
      case CAR_NUMBER:
        input = await Console.readLineAsync(
          "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        if (!this.validNameConvention(input))
          throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
        return input.split(",");

      case GAME_TRY:
        input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        if (!this.isNumber(input))
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return Number(input);
    }
  }

  getMovePoint() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) return true;
    return false;
  }

  printEachScore(car) {
    const name = car.name + " : ";
    let score = "";

    for (let i = 0; i < car.score; i++) score += "-";
    Console.print(name + score);
  }
  playRacing(scores, trial) {
    while (trial--) {
      scores.forEach((car) => {
        if (this.getMovePoint()) car.score = car.score + 1;
        this.printEachScore(car);
      });
      Console.print("");
    }
  }
}

export default App;

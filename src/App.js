import { Random, Console } from "@woowacourse/mission-utils";

const CARNAME_LENGTH = 5;
const MOVE_OR_STOP = 4;

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

    this.roundCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    let carPositions = this.resetCarPositions(carNames);
    Console.print("\n실행 결과");
    while (this.roundCount > 0) {
      this.raceGames(carNames, carPositions);
      this.getRoundResults(carNames, carPositions);
      this.roundCount--;
    }
  }
  
  validateCarNames(carNames) {
    for (let carName of carNames) {
      if (carName.length > CARNAME_LENGTH) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
  };

  resetCarPositions(carNames) {
    let carPositions = new Map();
    for (let carName of carNames) {
      carPositions.set(carName, 0);
    }
    return carPositions;
  };

  raceGames(carNames, carPositions) {
    for (let carName of carNames) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      let move = 0;
      if (randomNumber >= MOVE_OR_STOP) {
        move = 1;
      }
      carPositions.set(carName, carPositions.get(carName) + move);
    }
  };

  getRoundResults(carNames, carPositions) {
    for (let carName of carNames) {
      const position = carPositions.get(carName);
      let result = "";
      for (let i = 0; i < position; i++) {
        result += "-";
      }
      Console.print(carName + " : " + result);
    }
    Console.print("");
  };
}

export default App;
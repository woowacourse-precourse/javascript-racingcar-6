import { Random, Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import NumberArrayGenerator from "./NumberArrayGenerator.js";
import ResultManager from "./ResultManager.js";

class App {
  constructor() {
    this.racingCarMembers = [];
    this.roundNumber = 0;
    this.racingResults = [];
    this.winner = [];
  }

  async play() {
    const inputValidator = new InputValidator();
    const numberArrayGenerator = new NumberArrayGenerator();
    const resultManager = new ResultManager();

    this.racingCarMembers = await inputValidator.getValidMemberName(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.roundNumber = await inputValidator.getValidRoundNumber("시도할 횟수는 몇 회인가요?\n");

    this.racingResults = numberArrayGenerator.createRandomArray(this.racingCarMembers, this.roundNumber);

    resultManager.printTotalRoundsResults(this.roundNumber, this.racingCarMembers, this.racingResults);

    resultManager.printWinner(this.roundNumber, this.racingCarMembers, this.racingResults, this.winner);
  }
}

export default App;

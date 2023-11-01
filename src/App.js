import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "./Message.js";
import { validateCarNames, validateRound } from "./Validate.js";
import { positionHandleIterator } from "./Racing.js";
class App {
  constructor() {
    this.carsArr = [];
    this.inputCarNames = [];
    this.winner = [];
    this.round = 0;
  }

  async play() {
    await this.getCarNames();
    this.makeCarsInfo();
    await this.getRound();
    positionHandleIterator(this.carsArr, this.round);
    this.findWinners(this.carsArr);
    this.printWinners(this.winner);
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.CARNAME);
    this.inputCarNames = input.split(",");
    validateCarNames(this.inputCarNames);
  }

  //입력 받은 자동차 이름을 객체로 배열로 저장
  makeCarsInfo() {
    this.inputCarNames.forEach((carName) => {
      const carsInfo = {
        name: carName,
        position: 0,
      };
      this.carsArr.push(carsInfo);
    });
  }

  async getRound() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TRYCOUNT);
    this.round = String(input);
    validateRound(this.round);
  }

  findWinners = (carsArr) => {
    let winner = this.winner;
    let maxPosition = 0;
    carsArr.forEach((carsInfo) => {
      if (carsInfo.position > maxPosition) {
        maxPosition = carsInfo.position;
      }
    });
    carsArr.forEach((carsInfo) => {
      if (carsInfo.position === maxPosition) {
        winner.push(carsInfo.name);
      }
    });
    return winner;
  };

  printWinners(winner) {
    const winners = winner.join(", ");
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.WINNER} : ${winners}`);
  }
}

export default App;

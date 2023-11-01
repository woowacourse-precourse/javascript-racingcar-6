import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/message.js";
import ERROR from "./constants/error.js";
class Game {
  carNameList = [];
  countAttempt = null;
  currState = [];
  result = [];
  winnerList = [];

  start = async () => {
    await this.getCarNameList();
    await this.getCountAttempt();

    let i = 0;
    this.initState();
    while (i < this.countAttempt) {
      this.playRound();
      i++;
    }
    this.printResult();

    this.getWinnerList();
    this.printWinnerList();
  };

  playRound = () => {
    this.currState = this.currState.map((pos) => {
      if (this.shouldMoveForward()) return pos + 1;
      else return pos;
    });
    this.result.push(this.currState);
  };
  initState = () => {
    this.currState = new Array(this.carNameList.length).fill(0);
  };

  printResult = () => {
    Console.print("");
    Console.print(MESSAGE.RACE_RESULT_DISPLAY.INITIAL_MESSAGE);

    this.result.forEach((state) => {
      this.printState(state);
    });
  };

  printState = (state) => {
    const progressUnit = MESSAGE.RACE_RESULT_DISPLAY.PROGRESS_UNIT;
    state.forEach((pos, index) => {
      Console.print(
        `${this.carNameList.at(index)} : ${progressUnit.repeat(pos)}`
      );
    });
    Console.print(MESSAGE.RACE_RESULT_DISPLAY.ROUND_STATE_SEPERATOR);
  };

  getCarNameList = async () => {
    const input = await Console.readLineAsync(MESSAGE.PROMPT.CAR_NAME);
    const list = input.split(",").map((name) => name.trim());
    if (input.length == 0 || !this.isCarNameListValid(list)) {
      throw new Error(ERROR.MESSAGE.INVALID_INPUT);
    }
    this.carNameList = list;
  };

  isCarNameListValid = (list) => {
    if (list.length == 0) return false;
    if (new Set(list).size != list.length) return false;
    return list.every((name) => {
      return name.length > 0 && name.length <= 5;
    });
  };

  getCountAttempt = async () => {
    const input = await Console.readLineAsync(MESSAGE.PROMPT.COUNT_ATTEMPT);
    const count = Number(input);
    if (isNaN(count)) {
      throw new Error(ERROR.MESSAGE.INVALID_INPUT);
    }
    if (count === 0) {
      throw new Error(ERROR.MESSAGE.COUNT_ATTEMPT_INPUT_ZERO);
    }
    this.countAttempt = count;
  };

  shouldMoveForward = () => {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) return true;
    return false;
  };

  getWinnerList = () => {
    const finalState = this.result.slice(-1)[0];
    const maxValue = finalState.reduce((acc, curr) => {
      return Math.max(acc, curr);
    }, Number.NEGATIVE_INFINITY);

    finalState.forEach((pos, index) => {
      if (pos === maxValue) {
        this.winnerList.push(this.carNameList.at(index));
      }
    });
  };

  printWinnerList = () => {
    Console.print(
      `${MESSAGE.RACE_RESULT_DISPLAY.FINAL_WINNER} : ${this.winnerList.join(
        ", "
      )}`
    );
  };
}

export default Game;

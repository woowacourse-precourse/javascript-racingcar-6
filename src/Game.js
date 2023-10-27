import { Console, Random } from "@woowacourse/mission-utils";

class Game {
  carNameList = [];
  countAttempt = null;
  currState = [];
  result = [];

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
    Console.print("실행 결과");

    this.result.forEach((state) => {
      this.printState(state);
    });
  };

  printState = (state) => {
    state.forEach((pos, index) => {
      Console.print(`${this.carNameList.at(index)} : ${"-".repeat(pos)}`);
    });
    Console.print("");
  };

  getCarNameList = async () => {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const list = input.split(",").map((name) => name.trim());
    if (input.length == 0 || !this.isCarNameListValid(list)) {
      throw new Error("잘못된 형식입니다.");
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
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const count = Number(input);
    if (isNaN(count)) {
      throw new Error("잘못된 형식입니다.");
    }
    if (count === 0) {
      throw new Error("시도 횟수는 1번 이상이여야 합니다.");
    }
    this.countAttempt = count;
  };

  shouldMoveForward = () => {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) return true;
    return false;
  };
}

export default Game;

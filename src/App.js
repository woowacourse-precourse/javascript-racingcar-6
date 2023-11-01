import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class App {
  async userInputHandler() {
    const playerBeforeDivide = await Console.readLineAsync(
      "자동차 이름을 입력하세요.(이름은 쉼표(,)으로 구분, 공백없는 5글자 이하)\n"
    );
    const gameRound = await Console.readLineAsync(
      "게임을 시도할 횟수를 입력해 주세요.\n"
    );

    const playArray = playerBeforeDivide.split(",").trim();

    playArray.forEach((player) => {
      if (player === "") {
        throw new Error(
          "[ERROR] 공백없는 5자 이하의 자동차 이름만 가능합니다."
        );
      }
      if (player.length > 5) {
        throw new Error(
          "[ERROR] 공백없는 5자 이하의 자동차 이름만 가능합니다."
        );
      }
    });

    if (isNaN(gameRound) || gameRound >= 1) {
      throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }

    return playArray, gameRound;
  }

  async gamePlay(playerArray, gameRound) {
    let result = new Array(users.length).fill(0);
    Console.print("\n게임 결과");
    a;
    for (let round = 0; round < gameRound; round++) {
      for (let current = 0; current < playerArray.length; current++) {
        result[current] = Random.pickNumberInRange(0, 9) > 3 ? 1 : 0;
      }
      for (let current = 0; current < playerArray.length; current++) {
        Console.print(`${users[current]} : ${"-".repeat(result[current])}`);
      }
      Console.print("\n");
    }
    return result;
  }
  async generateGameResult(gameRoundReult) {
    let winners = [];
    const maxNumber = Math.max(...gameRoundReult);
    gameRoundReult.forEach((num, index) => {
      if (num === maxNumber) {
        winners.push(index);
      }
    });

    return winners;
  }

  async play() {
    const { playArray, gameRound } = await this.userInputHandler();
    const gameResults = await this.gamePlay(playArray, gameRound);
    const findWinner = await this.generateGameResult(gameResults);
    const winner = findWinner.map((value) => USERS[value]).join(", ");

    MissionUtils.Console.print(`우승자! : ${winner}`);
  }
}

export default App;

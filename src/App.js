import { MissionUtils } from "@woowacourse/mission-utils";
import { gameResult } from "./constant/printMessage";
import inputCarNames from "./user/inputCarNames";
import inputTryCount from "./user/inputTryCount";

class App {
  async play() {
    await this.gameStart();
  }

  async gameStart() {
    const carNames = await inputCarNames();
    const tryCount = await inputTryCount();
    let gameProcess = new Array(carNames.length).fill("");

    MissionUtils.Console.print(gameResult);

    const gameRound = this.runGame(carNames, gameProcess, tryCount);
    MissionUtils.Console.print(gameRound);

    const gameWinner = this.gameWinner(carNames, gameProcess);
    MissionUtils.Console.print(`최종 우숭자 : ${gameWinner}`);
  }

  runGame(carNames, gameProcess, tryCount) {
    let gameResult = "";
    for (let i = 0; i < tryCount; i++) {
      gameResult = this.playRound(carNames, gameProcess, gameResult);
    }
    return gameResult;
  }

  playRound(carNames, gameProcess, gameResult) {
    for (let i = 0; i < carNames.length; i++) {
      const randomNumber = this.generateRandomNumber();
      if (randomNumber >= 4) {
        gameProcess[i] += "-";
      }
      gameResult += `${carNames[i]} : ${gameProcess[i]} \n`;
    }
    return gameResult;
  }

  gameWinner(carNames, gameProcess) {
    let maxHyphenCount = 0;
    const winnerCars = [];

    for (let i = 0; i < gameProcess.length; i++) {
      const hyphenCount = (gameProcess[i].match(/-/g) || []).length;

      if (hyphenCount > maxHyphenCount) {
        maxHyphenCount = hyphenCount;
      }

      if (hyphenCount === maxHyphenCount) {
        winnerCars.push(carNames[i]);
      }
    }

    return winnerCars.join(", ");
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default App;

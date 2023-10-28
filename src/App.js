import { MissionUtils } from "@woowacourse/mission-utils";
import { gameResult } from "./constant/printMessage";
import inputCarNames from "./user/inputCarNames";
import inputTryCount from "./user/inputTryCount";

class App {
  async play() {
    await this.gameStart();
  }

  async gameStart() {
    const separateCarName = await inputCarNames();
    const tryCount = await inputTryCount();
    let saveGameProcess = new Array(separateCarName.length).fill("");

    MissionUtils.Console.print(gameResult);

    const gameRound = this.getGameRound(separateCarName, saveGameProcess, tryCount);
    MissionUtils.Console.print(gameRound);

    const gameWinner = this.getGameWinner(separateCarName, saveGameProcess);
    MissionUtils.Console.print(`최종 우숭자 : ${gameWinner}`);
  }

  getGameRound(separateCarName, saveGameProcess, tryCount) {
    let gameResult = "";
    for (let i = 0; i < tryCount; i++) {

      gameResult = this.getGameResult(separateCarName, saveGameProcess, gameResult);
    }

    return gameResult;
  }

  getGameResult(separateCarName, saveGameProcess, gameResult) {
    for (let i = 0; i < separateCarName.length; i++) {
      const randomNumber = this.generateRandomNumber();
      if (randomNumber >= 4) {
        saveGameProcess[i] = saveGameProcess[i] + "-";
      }

      gameResult = gameResult + `${separateCarName[i]} : ${saveGameProcess[i]} \n`;
    }

    return gameResult;
  }

  getGameWinner(separateCarName, saveGameProcess) {
    let maxHyphenCount = 0;
    const winnerCars = [];

    for (let i = 0; i < saveGameProcess.length; i++) {
      const hyphenCount = (saveGameProcess[i].match(/-/g) || []).length;

      if (hyphenCount > maxHyphenCount) {
        maxHyphenCount = hyphenCount;
      }

      if (hyphenCount === maxHyphenCount) {
        winnerCars.push(separateCarName[i]);
      }
    }

    return winnerCars.join(", ");
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default App;

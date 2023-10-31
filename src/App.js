import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, POSITION_MARK } from "./constants.js";
import { nameValidation, repeatCountValidation } from "./utils/validation.js";

class App {
  #gameData = {};
  #repeatCount;

  async setGameData() {
    const playerNameInput = await Console.readLineAsync(MESSAGE.nameQuery);
    const playerNames = await playerNameInput
      .split(",")
      .map((name) => name.trim());
    nameValidation(playerNames);
    playerNames.forEach((name) => (this.#gameData[name] = { position: 0 }));
  }

  getGameData() {
    return this.#gameData;
  }

  // 사용자로부터 이동 횟수를 입력받는다.
  async setRepeatCount() {
    const repeatCountInput = await Console.readLineAsync(MESSAGE.numberQuery);
    repeatCountValidation(await repeatCountInput);
    this.#repeatCount = Number(await repeatCountInput);
  }

  getRepeatCount() {
    return this.#repeatCount;
  }

  isGoing() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  playerTurn(playerName) {
    if (this.isGoing()) {
      this.#gameData[playerName].position += 1;
    }
  }

  printCurrentPosition(playerName) {
    Console.print(
      `${playerName} : ${POSITION_MARK.repeat(
        this.#gameData[playerName].position,
      )}`,
    );
  }

  oneTurn() {
    Object.keys(this.#gameData).forEach((playerName) =>
      this.playerTurn(playerName),
    );
    Object.keys(this.#gameData).forEach((playerName) =>
      this.printCurrentPosition(playerName),
    );
  }

  repeatTurn(repeatCount) {
    Array.from({ length: repeatCount }).forEach(() => {
      this.oneTurn();
      Console.print("");
    });
  }

  printWinner() {
    const maxPosition = Object.values(this.#gameData).reduce(
      (prevMax, { position }) => {
        return Math.max(prevMax, position);
      },
      -Infinity,
    );
    const winnerName = Object.keys(this.#gameData).filter((playerName) => {
      return this.#gameData[playerName].position === maxPosition;
    });
    Console.print(`${MESSAGE.theWinnerIs}${winnerName.join(", ")}`);
  }

  async play() {
    await this.setGameData();
    await this.setRepeatCount();
    Console.print("");
    Console.print(MESSAGE.gameStart);
    this.repeatTurn(this.#repeatCount);
    this.printWinner();
  }
}

export default App;

import { Console, Random } from "@woowacourse/mission-utils";
import { GAME, MOVING_FOWARD } from "./Constant.js";
import { validPlayerInput, validTryInput } from "./validInput.js";

class RacingCar {
  async init() {
    try {
      const playerInput = await Console.readLineAsync(GAME.inputName);
      const tryInput = await Console.readLineAsync(GAME.inputTry);
      const players = playerInput.replace(/\s/g, "").split(",");

      validPlayerInput(players);
      validTryInput(tryInput);
      this.start(players, tryInput);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }

  async start(players, tryInput) {
    const tryNumber = Number(tryInput);
    const playersResult = players.reduce((a, v) => ({ ...a, [v]: [] }), {});
    let time = 0;

    Console.print(GAME.result);

    while (time < tryNumber) {
      this.racingResult(players, playersResult);
      time++;
    }

    this.end(playersResult);
  }

  end(playersResult) {
    const winners = this.getWinners(playersResult).join(", ");

    Console.print(GAME.winners + winners);
  }

  getWinners(playersResult) {
    const playersWinnerLength = Object.values(playersResult)
      .map((arr) => arr.length)
      .sort((a, b) => b - a)[0];

    const winners = [];

    for (const property in playersResult) {
      playersResult[property].length === playersWinnerLength ? winners.push(property) : "";
    }

    return winners;
  }

  racingResult(players, playersResult) {
    players.forEach((player, i) => {
      const randomNumber = Random.pickNumberInRange(0, 9);

      randomNumber >= MOVING_FOWARD ? playersResult[player].push("-") : "";

      Console.print(`${player} : ${playersResult[player].join("")}${i === players.length - 1 ? "\n" : ""}`);
    });
  }
}

export default RacingCar;

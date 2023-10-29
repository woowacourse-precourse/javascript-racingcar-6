import { Console, Random } from "@woowacourse/mission-utils";
import { validPlayerInput, validTryInput } from "./validInput.js";

class RacingCar {
  async init() {
    const playerInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const tryInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const players = playerInput.replace(/\s/g, "").split(",");

    validPlayerInput(players);
    validTryInput(tryInput);
    this.start(players, tryInput);
  }

  async start(players, tryInput) {
    const tryNumber = Number(tryInput);
    const playersResult = players.reduce((a, v) => ({ ...a, [v]: [] }), {});
    let time = 0;

    Console.print("\n실행 결과");

    while (time < tryNumber) {
      this.racingResult(players, playersResult);
      time++;
    }

    this.end(playersResult);
  }

  end(playersResult) {
    const winners = this.getWinners(playersResult).join(", ");

    Console.print(`최종 우승자 : ${winners}`);
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

      randomNumber >= 4 ? playersResult[player].push("-") : "";

      Console.print(`${player} : ${playersResult[player].join("")}${i === players.length - 1 ? "\n" : ""}`);
    });
  }
}

export default RacingCar;

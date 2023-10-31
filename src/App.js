import { Console } from "@woowacourse/mission-utils";
import Race from "./Race.js";
const MIN_NAME = 0;
const MAX_NAME = 5;
const MIN_ROUND = 0;
const MAX_ROUND = 9;

class App {
  async play() {
    const carNames = await this.getCarNames();
    const totalRound = await this.getTotalRound();
    const race = new Race(carNames);

    this.validateInput(carNames, totalRound);

    for (let i = 0; i < totalRound; i++) {
      race.startRound();
      this.displayRaceStateOfRound(race.stateOfRace());
    }

    const winners = race.decideWinners();
    this.displayWinners(winners);
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return input.split(",");
  }

  async getTotalRound() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    return Number(input);
  }

  displayRaceStateOfRound(raceState) {
    raceState.forEach((car) => {
      Console.print(`${car.name} : ${car.distance}`);
    });
    Console.print("");
  }

  displayWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  validateInput(carNames, totalRound) {
    if (
      carNames.some(
        (name) => name.length === MIN_NAME || name.length > MAX_NAME
      )
    ) {
      throw new Error("[ERROR] 이름은 1자 이상, 5자 이하만 가능합니다.");
    }

    if (isNaN(totalRound) || totalRound < MIN_ROUND || totalRound > MAX_ROUND) {
      throw new Error("[ERROR] 0과 9사이의 자연수만 입력 가능합니다.");
    }
  }
}

export default App;

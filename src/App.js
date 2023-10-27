import { Console } from "@woowacourse/mission-utils";
import Race from "./Race";

class App {
  async play() {
    const arrCarName = await this.getCarNames();
    const totalRound = await this.getTotalRound();
    const race = new Race(arrCarName);

    this.validateInput(arrCarName, totalRound);
    
    for (let i = 0; i < totalRound; i++) {
      race.roundStart();
      // race.getRaceState == [{name1 : '이름', distance : '---'}, {name2 : '이름2', distance : '--'} ...]
      this.displayRaceStateOfRound(race.getRaceState());
    }

    // winners == ['우승자1', '우승자2']
    const winners = race.getWinners();
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

  validateInput(arrCarNames, totalRound) {
    if (arrCarNames.some((name) => name.length > 5 || name.length === 0)) {
      throw new Error("[ERROR] 이름은 1자 이상, 5자 이하만 가능합니다.");
    }

    if (isNaN(totalRound) || totalRound < 0 || totalRound > 9) {
      throw new Error("[ERROR] 0과 9사이의 자연수만 입력 가능합니다.");
    }
  }
}

export default App;

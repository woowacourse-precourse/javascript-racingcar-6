import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const arrCarNames = await this.getCarNames();
    const totalRound = await this.getTotalRound();

    /*
      Todo :
      raceState - [{'이름1' : '이동 거리'}, {'이름2' : '이동 거리'}] 형태의 배열
      displayRaceStateOfRound(raceState);

      winners - 우승자 명단이 들어있는 배열
      displayWinners(winners);
    */
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
}

export default App;

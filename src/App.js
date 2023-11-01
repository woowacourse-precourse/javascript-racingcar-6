import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async prepareGame() {
    const carsInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분\n"
    );
    if (!carsInput.includes(",")) {
      throw new Error("[ERROR]: 2개 이상의 자동차가 필요합니다");
    }
    const carList = carsInput.split(",").map((item) => item.trim());
    for (const car of carList) {
      if (car.length > 5) {
        throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다");
      }
    }
    const roundInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const round = parseInt(roundInput, 10);
    if (isNaN(round) || round <= 0) {
      throw new Error("[ERROR]: 숫자가 잘못된 형식입니다");
    }

    let scoreboard = carList.reduce((acc, car) => {
      acc[car] = "";
      return acc;
    }, {});

    return { carList, round, scoreboard };
  }

  roundRace(carList, scoreboard) {
    for (let car of carList) {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        scoreboard[car] += "-";
      }
      MissionUtils.Console.print(`${car} : ${scoreboard[car]}`);
    }
    MissionUtils.Console.print("");

    return scoreboard;
  }

  findWinner(scoreboard) {
    let winner = "";
    let max = 0;
    for (const [key, value] of Object.entries(scoreboard)) {
      if (value.length > max) {
        max = value.length;
        winner = key;
      } else if (value.length === max) {
        winner += ", " + key;
      }
    }
    return winner;
  }

  async play() {
    const gameData = await this.prepareGame();
    const { carList, round } = gameData;
    let { scoreboard } = gameData;

    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < round; i++) {
      scoreboard = this.roundRace(carList, scoreboard);
    }

    const winner = this.findWinner(scoreboard);
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;

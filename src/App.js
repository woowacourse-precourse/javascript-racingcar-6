import { Console } from "@woowacourse/mission-utils";
import Race from "./Race.js";
import RACE_INFO from "./constants/raceInfo.js";

class App {
  async play() {
    const carNames = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).split(",");

    carNames.forEach((carName) => {
      if (
        carName.length > RACE_INFO.maxCarNameLength ||
        carName.length < RACE_INFO.minCarNameLength
      ) {
        throw new Error(
          `[ERROR] 자동차 이름은 ${RACE_INFO.minCarNameLength}자 이상 ${RACE_INFO.maxCarNameLength}자 이하만 가능합니다.`
        );
      }
    });

    const numAttempts = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const race = new Race(carNames);
    race.runRace(numAttempts);

    const winners = race.getWinners();

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;

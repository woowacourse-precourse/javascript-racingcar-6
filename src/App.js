import { MissionUtils } from "@woowacourse/mission-utils";

import PRINTOUT from "../src/Printout.js";

class App {
  raceProcess(enterCars, raceProgress) {
    for (let j = 0; j < enterCars.length; j++) {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        raceProgress[j]++;
      }
      const progress = "-".repeat(raceProgress[j]);
      MissionUtils.Console.print(`${enterCars[j]} : ${progress}`);
    }
  }

  async play() {
    const inputCars = await MissionUtils.Console.readLineAsync(
      PRINTOUT.ASK_NAME
    );
    let enterCars = inputCars.split(",");
    MissionUtils.Console.print(enterCars);

    // 이름 입력 에러 처리
    const errorCheck = new Error();
    for (let i = 0; i < enterCars.length; i++) {
      if (enterCars[i].length > 6) {
        throw new Error("[ERROR] 5자 이하 이름을 입력하세요.");
      }
      if (!enterCars[i]) {
        throw new Error("[ERROR] 공백이 입력되었습니다.");
      }
    }
    if (enterCars.some((car) => car.trim() === "")) {
      throw new Error("[ERROR] 공백이 입력되었습니다.");
    }

    const raceCount = await MissionUtils.Console.readLineAsync(
      PRINTOUT.ASK_COUNT
    );

    // 시도 횟수 입력 에러처리
    if (!raceCount) {
      throw new Error("[ERROR] 공백이 입력되었습니다.");
    } else if (raceCount < 1) {
      throw new Error("[ERROR] 1 이상 입력하세요.");
    } else if (!Number.isInteger(Number(raceCount))) {
      throw new Error("[ERROR] 정수를 입력하세요.");
    }

    MissionUtils.Console.print(PRINTOUT.RACE_RESULT);
    // 전진
    let raceProgress = new Array(enterCars.length);
    raceProgress.fill(0);
    for (let i = 0; i < raceCount; i++) {
      this.raceProcess(enterCars, raceProgress);
      MissionUtils.Console.print("");
    }

    let winner = [];
    let winnerIdx = raceProgress.indexOf(Math.max(...raceProgress));
    while (winnerIdx != -1) {
      winner.push(enterCars[winnerIdx]);
      winnerIdx = raceProgress.indexOf(
        Math.max(...raceProgress),
        winnerIdx + 1
      );
    }
    // 우승자 출력
    MissionUtils.Console.print(
      `${PRINTOUT.RACE_WINNER} ${winner.map((name) => name).join(", ")}`
    );
  }
}

export default App;

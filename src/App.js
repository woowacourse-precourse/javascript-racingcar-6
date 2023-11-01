import { MissionUtils } from "@woowacourse/mission-utils";

import PRINTOUT from "../src/Printout.js";

class App {
  async play() {
    // 자동차 이름 받기
    const inputCars = await MissionUtils.Console.readLineAsync(
      PRINTOUT.ASK_NAME
    );

    // 쉼표로 이름 분리
    let enterCars = inputCars.split(",");
    MissionUtils.Console.print(enterCars);
    // 이름 입력 에러 처리
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

    // 시도 횟수 입력 받기
    const raceCount = await MissionUtils.Console.readLineAsync(
      PRINTOUT.ASK_COUNT
    );
    MissionUtils.Console.print(raceCount);
    // 시도 횟수 입력 에러처리
    if (!raceCount) {
      throw new Error("[ERROR] 공백이 입력되었습니다.");
    } else if (raceCount < 1) {
      throw new Error("[ERROR] 1 이상 입력하세요.");
    }

    MissionUtils.Console.print(PRINTOUT.RACE_RESULT);
    // 전진 구현
    // 전진 조건은 0~9 사이 난수 >= 4 면 1칸 이동
    // 전진 구현하면서 동시에 출력
    let raceProgress = new Array(enterCars.length);
    raceProgress.fill(0);
    for (let i = 0; i < raceCount; i++) {
      // 전진 과정 함수로 분리하기
      for (let j = 0; j < enterCars.length; j++) {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          raceProgress[j]++;
        }
        const progress = "-".repeat(raceProgress[j]);
        MissionUtils.Console.print(`${enterCars[j]} : ${progress}`);
      }
      MissionUtils.Console.print("");
    }

    // 최종 우승차 출력
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

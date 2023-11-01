import { MissionUtils } from "@woowacourse/mission-utils";
import playerRegistration from "./playerRegistration.js";
import attempts from "./attempts.js";
import race from "./race.js";
import winner from "./winner.js";

class App {
  async play() {
    const player = await playerRegistration(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const userAttempts = await attempts("시도할 횟수는 몇 회인가요?");
    const raceStart = race(player, userAttempts);
    const playWinner = winner(raceStart);
    MissionUtils.Console.print(`최종 우승자 : ${playWinner}`);
  }
}

const app = new App();
app.play();

export default App;

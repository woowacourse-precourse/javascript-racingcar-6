import { Console } from "@woowacourse/mission-utils";
import RacingManager from "./RacingManager";

class App {
  async play() {
    try {
       const racingManager = new RacingManager();
       const PARTIPATING_CARS = await racingManager.inputParticipatingCar();
       const NUMBER_OF_ROUNDS = await racingManager.inputNumberOfRounds();
       const WINNERS = racingManager.startRacing(PARTIPATING_CARS, NUMBER_OF_ROUNDS);

       Console.print("최종 우승자 : "+WINNERS);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default App;

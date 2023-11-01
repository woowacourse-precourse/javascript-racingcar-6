import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RacingGameController from "./controller/RacingGameController.js";

class App {
  #RacingGame = new RacingGameController();
  constructor() {}

  // showRaceWinnerMessage() {
  //   const raceResult = Object.values(this.cars);
  //   const winners = [];
  //   let winnerResult = 0;
  //   for (let i = 0; i < raceResult.length; i++) {
  //     if (raceResult[i].length > winnerResult) {
  //       winnerResult = raceResult[i].length;
  //     }
  //   }
  //   for (let item in this.cars) {
  //     let length = this.cars[item].length;
  //     if (length == winnerResult) {
  //       winners.push(item);
  //     }
  //   }
  //   Console.print(`최종 우승자 : ${winners.join(",")}`);
  // }

  async play() {
    await this.#RacingGame.startGame();
  }
}
const app = new App();
app.play();

export default App;

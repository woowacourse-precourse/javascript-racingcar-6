import { Random, Console } from "@woowacourse/mission-utils";
import message from "./message.js";
import {
  validateCarScore,
  // validateCarLength,
  validateDisplayWinner,
  validateInputRacecar,
} from "./validation.js";

class App {
  async play() {
    await this.userInputRacecar();
  }

  async userInputRacecar() {
    const playerRacecar = await Console.readLineAsync(message.START_MESSAGE);
    const allRacecars = playerRacecar.split(",");
    // const allRacecars = playerRacecar.trim().split(",");

    allRacecars.map((car) => {
      validateInputRacecar(car);
    });

    await this.userInputLaps(allRacecars);
  }

  async userInputLaps(racecars) {
    const NUMBER_OF_LAPS = await Console.readLineAsync(message.INPUT_ROTATION);
    let SCORES = new Array(racecars.length).fill(0);

    Console.print(message.DISPLAYING_RESULTS_MSG);

    for (let i = 0; i < NUMBER_OF_LAPS; i++) {
      racecars.map((car, index) => {
        const RANDOM_SCORE = Random.pickNumberInRange(0, 9);
        validateCarScore(RANDOM_SCORE, car, index, SCORES);
      });
    }

    await this.displayWinners(SCORES, racecars);
  }

  async displayWinners(scores, winners) {
    validateDisplayWinner(scores, winners);
  }

  async restartGame() {
    await this.userInputRacecar();
  }
}

export default App;
const app = new App();
app.play();

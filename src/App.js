import { Random, Console } from "@woowacourse/mission-utils";
import message from "./message.js";

class App {
  async play() {
    await this.displayResults();
  }

  async displayResults() {
    const carName = await Console.readLineAsync(message.START_MESSAGE);
    const cars = carName.trim().split(",");
    let carScores = new Array(cars.length).fill(0);

    cars.map((el) => {
      if (el.length > 5 || el.length <= 0) {
        throw new Error(message.INPUT_CARNAME_ERROR);
      }
    });
    const ROTATION = await Console.readLineAsync(message.INPUT_ROTATION);

    Console.print(message.DISPLAYING_RESULTS);
    for (let i = 0; i < ROTATION; i++) {
      cars.map((car, index) => {
        const SCORE = Random.pickNumberInRange(0, 9);
        //
        if (SCORE <= 4) {
          return Console.print(`${car} : -`);
        } else if (SCORE > 4) {
          Console.print(`${car} : ${SCORE}`);
          carScores[index] += SCORE;
        } else {
          throw new Error("[ERROR]");
        }
      });
    }

    const highestScore = Math.max(...carScores);
    const highestScoringCars = cars.filter(
      (_, carIndex) => carScores[carIndex] === highestScore
    );
    Console.print(
      "최종 우승자 : " +
        (highestScoringCars.length === 1
          ? highestScoringCars
          : highestScoringCars.join(", "))
    );
  }
}

export default App;
const app = new App();
app.play();

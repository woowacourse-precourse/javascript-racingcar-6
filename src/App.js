import { Console, Random } from "@woowacourse/mission-utils";
import CarNames from "./utils/CarNames.js";
import Attempts from "./utils/Attempts.js";
import { GAME_MESSAGE } from "./constants/messages";
import { MOVE_THRESHOLD, RANDOM_NUMBER_RANGE } from "./constants/numeric.js";

class App {
  async play() {
    const carNamesArray = await new CarNames().getArray();
    const attemptsNumber = await new Attempts().getNumber();

    let raceResults = this.initializeRaceResults(carNamesArray);
    this.startRace(attemptsNumber, raceResults);

    const winners = this.determineWinners(raceResults);
    Console.print(`${GAME_MESSAGE.WINNER}${winners.join(", ")}`);
  }

  initializeRaceResults(carNamesArray) {
    return carNamesArray.map((carName) => ({ name: carName, distance: "" }));
  }

  startRace(attemptsNumber, raceResults) {
    for (let i = 0; i < attemptsNumber; i++) {
      this.raceRound(raceResults);
      this.displayRoundResult(raceResults);
    }
  }

  raceRound(raceResults) {
    raceResults.forEach((car) => {
      const randomNum = Random.pickNumberInRange(RANDOM_NUMBER_RANGE.FROM, RANDOM_NUMBER_RANGE.TO);
      this.updateCarDistanceBasedOnRandomNum(car, randomNum);
    });
  }

  updateCarDistanceBasedOnRandomNum(car, randomNum) {
    if (randomNum >= MOVE_THRESHOLD) {
      car.distance += "-";
    }
  }

  displayRoundResult(raceResults) {
    raceResults.forEach((car) =>
      Console.print(`${car.name} : ${car.distance}`)
    );
  }

  determineWinners(raceResults) {
    const maxDistance = Math.max(
      ...raceResults.map((car) => car.distance.length)
    );

    return raceResults
      .filter((car) => car.distance.length === maxDistance)
      .map((car) => car.name);
  }
}

export default App;

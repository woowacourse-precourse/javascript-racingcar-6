import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import UserInterface from "./UserInterface.js";
import MESSAGES from "./Messages.js";

class RacingGame {
  constructor(carNames, raceRounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.rounds = raceRounds;
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  checkCarCanMove(randomNumber) {
    return randomNumber >= 4;
  }

  start() {
    Console.print(MESSAGES.RACING_RESULT);
    for (let i = 0; i < this.rounds; i++) {
      this.cars.forEach((car) => {
        const randomNumber = this.generateRandomNumber();
        if (this.checkCarCanMove(randomNumber)) {
          car.move();
        }
      });
      const carStatuses = this.cars.map((car) => ({
        carName: car.name,
        distance: car.distance,
      }));
      UserInterface.printRoundResults(carStatuses);
    }
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    if (maxDistance === 0) {
      return [];
    }

    const winners = this.cars.filter((car) => car.distance === maxDistance);
    const winnerNames = winners.map((car) => car.name);
    return winnerNames;
  }
}

export default RacingGame;

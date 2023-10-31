import * as MissionUtils from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { ERROR, MESSAGE } from "./Constant.js";

class App {
  async inputName() {
    const userInput = await MissionUtils.Console.readLineAsync(
      MESSAGE.inputName
    );
    const carNames = userInput.split(",");

    if (
      carNames.some((name) => name.trim().length > 5 || name.trim().length == 0)
    ) {
      throw new Error(ERROR.nameLength);
    } else if (new Set(carNames).size < 2) {
      throw new Error(ERROR.minimumCarCount);
    }
    return carNames;
  }

  async inputRaceRound() {
    const userInput = await MissionUtils.Console.readLineAsync(
      MESSAGE.inputRound
    );
    return userInput;
  }

  async makeRacingCar(carNames) {
    const racingCars = [];
    carNames.map((name) => {
      const newCar = new Car(name);
      racingCars.push(newCar);
    });

    return racingCars;
  }

  async runRace(racingCars, racingRound) {
    MissionUtils.Console.print(MESSAGE.result);
    for (let i = 0; i < racingRound; i++) {
      racingCars.map((car) => {
        car.move();
        car.print();
      });
      MissionUtils.Console.print("");
    }
  }

  async getWinner(racingCars) {
    const moves = [];
    racingCars.map((car) => moves.push(car.getMoveCount()));
    const maxScore = Math.max(...moves);
    const winners = [];

    racingCars.map((car) => {
      if (car.getMoveCount() === maxScore) {
        winners.push(car.getName());
      }
    });

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    const carNames = await this.inputName();

    const racingRound = await this.inputRaceRound();

    const racingCars = await this.makeRacingCar(carNames);

    await this.runRace(racingCars, racingRound);

    await this.getWinner(racingCars);
  }
}

export default App;

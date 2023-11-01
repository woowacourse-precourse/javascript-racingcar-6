import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import Car from "./Car.js";
import TryCount from "./TryCount.js";
import RandomNumber from "./RandomNumber.js";
import MovingForward from "./MovingForward.js";
import Winner from "./Winner.js";

class App {
  constructor() {
    this.car = new Car();
    this.tryCount = new TryCount();
    this.randomNumber = new RandomNumber();
    this.movingForward = new MovingForward(
      this.car,
      this.tryCount,
      this.randomNumber
    );
    this.winner = new Winner(this.car, this.movingForward);
  }

  async play() {
    await this.car.getInputCar();
    await this.tryCount.getInputTry();
    await this.playRacing();
  }

  async playRacing() {
    Console.print(GAME_HELP.GAME_RESULT);

    await this.movingForward.createRacingArray();

    for (let i = 0; i < this.tryCount.tryNumber; i++) {
      await this.movingForward.oneCycleRacing();
    }

    await this.winner.showWinner();
  }
}

export default App;

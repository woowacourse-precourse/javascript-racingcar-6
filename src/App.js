import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import Car from "./Car.js";
import TryCount from "./TryCount.js";
import RandomNumber from "./RandomNumber.js";
import Forward from "./Forward.js";
import Winner from "./Winner.js";

class App {
  constructor() {
    this.car = new Car();
    this.tryCount = new TryCount();
    this.randomNumber = new RandomNumber();
    this.forward = new Forward(this.car, this.tryCount, this.randomNumber);
    this.winner = new Winner(this.car, this.forward);
  }

  async play() {
    await this.car.getInputCar();
    await this.tryCount.getInputTry();
    await this.playRacing();
  }

  async playRacing() {
    Console.print(GAME_HELP.GAME_RESULT);

    await this.forward.createRacingArray();

    for (let i = 0; i < this.tryCount.tryNumber; i++) {
      await this.forward.oneCycleRacing();
    }

    await this.winner.showWinner();
  }
}

export default App;

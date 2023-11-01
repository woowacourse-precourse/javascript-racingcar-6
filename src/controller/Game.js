import CarProperty from "../model/carProperty.js";
import UserInput from "../model/userInput.js";
import Distance from "./distance.js";
import { Winners } from "./winners.js";

export class Game {
  constructor() {
    this.carProperty = new CarProperty();
    this.distance = new Distance();
    this.winners = new Winners();
  }

  async playGame() {
    const carNames = await UserInput.getCarNames();
    this.carProperty.makeCarArray(carNames);

    const attempts = await UserInput.getAttemptNumbers();

    this.distance.addDistancePrintArray(attempts, this.carProperty.carArray);

    this.winners.selectPrintWinner(this.carProperty.carArray);
  }
}

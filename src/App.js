/* eslint-disable no-plusplus */
import Car from "./Car.js";
import Validator from "./Validator.js";
import InputOutput from "./InputOutput.js";
import RaceSimulator from "./RaceSimulator.js";
import GameMessage from "./GameMessage.js";

class App {
  #garage = [];

  constructor() {
    this.validator = new Validator();
    this.inputOutput = new InputOutput();
    this.raceSimulator = new RaceSimulator();
  }

  async play() {
    await this.mainLogic();
  }

  async mainLogic() {
    await this.settingGarage();
    await this.startRace();
    this.award();
  }

  async settingGarage() {
    const carNameList = await this.inputOutput.getCarNames();
    this.makingCar(carNameList);
  }

  makingCar(carNameList) {
    carNameList.forEach((item) => {
      if (this.validator.isValidCarName(item)) {
        const car = new Car(item);
        this.#garage.push(car);
      }
    });
  }

  async startRace() {
    // Console.print(startComment);
    this.inputOutput.print(GameMessage.EXCUTION_RESULT);
    const userInputCount = await this.inputOutput.getAttemptCount();
    this.raceSimulator.simulateRace(this.#garage, userInputCount);
  }

  award() {
    const countScoreList = this.raceSimulator.countScore(this.#garage);
    this.raceSimulator.announceWinners(this.#garage, countScoreList);
  }
}

export default App;

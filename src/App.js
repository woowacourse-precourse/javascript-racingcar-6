import ERROR_MESSAGE from './constant/errorMessage.js';
import GAME_MESSAGE from './constant/gameMessage.js';
import Car from './model/Car.js';
import allCars from './model/allCars.js';
import TrialNum from './model/trialNum.js';
import randomNumGenerator from './utils/RandomNumGenerator.js';
import messagePrinter from './utils/messagePrinter.js';
class App {
  #cars;

  #trials;

  #moveStatus;

  async play() {
    await this.getCarNameInput();
    await this.getTrialNumInput();

    await messagePrinter.outputPrint(GAME_MESSAGE.line_break);
    await messagePrinter.outputPrint(GAME_MESSAGE.print_start_result);

    this.#moveStatus = new Array(this.#cars.length).fill(0);

    let i = 0;
    while (i < this.#trials) {
      const moveForwardArr = await this.raceStart(this.#cars);
      this.#moveStatus = this.#moveStatus.map((value, index) => value + moveForwardArr[index]);
      await this.printCurCarMove(this.#cars, this.#moveStatus);
      i += 1;
    }

    await this.printWinners(this.#cars, this.#moveStatus);
  }

  async getCarNameInput() {
    const carName = await messagePrinter.inputPrint(GAME_MESSAGE.get_car_name);
    const carNameArray = carName.split(',');
    const carClass = new allCars(carNameArray);
    this.#cars = carClass.getCars();
  }

  async getTrialNumInput () {
    const trialNum = await messagePrinter.inputPrint(GAME_MESSAGE.get_trial_num);
    const trialNumClass = new TrialNum(trialNum);
    this.#trials = trialNumClass.getTrials();
  }

  async raceStart (carNameArr) {
    const carNum = carNameArr.length;
    const moveForwardArr = new Array(carNum).fill(0);
    for (let i = 0; i < carNum; i++) {
      const randomNum = randomNumGenerator();
      if (randomNum >= 4) {
        moveForwardArr[i] = 1;
      }
    }
    return moveForwardArr;
  }

  async printCurCarMove (carNameArr, curMoveForwardArr) {
    for (let i = 0; i < carNameArr.length; i++) {
      const carName = carNameArr[i];
      const curMoveForward = curMoveForwardArr[i];
      await messagePrinter.outputPrint(GAME_MESSAGE.print_move_status(carName, curMoveForward));
    }
    await messagePrinter.outputPrint(GAME_MESSAGE.line_break);
  }

  async printWinners (carNameArr, curMoveForwardArr) {
    const maxMove = Math.max(...curMoveForwardArr);

    const winners = [];

    for (let i = 0; i < carNameArr.length; i++) {
      if (maxMove === curMoveForwardArr[i]) {
        winners.push(carNameArr[i]);
      }
    }

    await messagePrinter.outputPrint(GAME_MESSAGE.print_winners(winners));
  }
}

export default App;

import ERROR_MESSAGE from './constant/errorMessage.js';
import GAME_MESSAGE from './constant/gameMessage.js';
import randomNumGenerator from './utils/RandomNumGenerator.js';
import messagePrinter from './utils/messagePrinter.js';
class App {
  #cars;

  #trials;

  #moveStatus;

  async play() {
    this.#cars = await this.getCarNameInput();
    await this.checkValidCarName(this.#cars);
    this.#trials = await this.getTrialNumInput();
    await this.checkValidTrialNum(this.#trials);

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
    return carName.split(',');
  }

  async checkValidCarName (carNameArr) {
    for (let i = 0; i < carNameArr.length; i++) {
      const carName = carNameArr[i];
      if (carName.length > 5) {
        messagePrinter.errorPrint(ERROR_MESSAGE.more_than_five_letters);
      } else if (carName.length === 0) {
        messagePrinter.errorPrint(ERROR_MESSAGE.no_letters);
      }
    }
    if (carNameArr.length !== new Set([...carNameArr]).size) {
      messagePrinter.errorPrint(ERROR_MESSAGE.duplicated_car_names);
    }
  }

  async getTrialNumInput () {
    const trialNum = await messagePrinter.inputPrint(GAME_MESSAGE.get_trial_num);
    return trialNum;
  }

  async checkValidTrialNum (trialNum) {
    if (Number.isNaN(trialNum)) {
      messagePrinter.errorPrint(ERROR_MESSAGE.not_number);
    } else if (trialNum < 1) {
      messagePrinter.errorPrint(ERROR_MESSAGE.less_than_one_trial);
    } else if (trialNum.includes(' ')) {
      messagePrinter.errorPrint(ERROR_MESSAGE.has_space);
    }
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

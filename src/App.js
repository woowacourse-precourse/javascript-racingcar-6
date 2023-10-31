import ERROR_MESSAGE from './constant/errorMessage';
import GAME_MESSAGE from './constant/gameMessage';
import randomNumGenerator from './utils/RandomNumGenerator';
import messagePrinter from './utils/messagePrinter';
class App {
  async play() {
    const carNameArr = await this.getCarNameInput();
    await this.checkValidCarName(carNameArr);
    const trialNum = await this.getTrialNumInput();
    await this.checkValidTrialNum(trialNum);

    let curMoveForwardArr = new Array(carNameArr.length).fill(0);
    let i = 0;
    while (i < trialNum) {
      const moveForwardArr = await this.raceStart(carNameArr);
      curMoveForwardArr = curMoveForwardArr.map((value, index) => value + moveForwardArr[index]);
      await this.printCurCarMove(carNameArr, curMoveForwardArr);
      i += 1;
    }

    await this.printWinners(carNameArr, curMoveForwardArr);
  }

  async getCarNameInput() {
    const carName = await messagePrinter.inputPrint(GAME_MESSAGE.get_car_name);
    return carName.split(',');
  }

  async checkValidCarName (carNameArr) {
    for (let i = 0; i < carNameArr.length; i++) {
      if (carNameArr[i].length > 5 || carNameArr[i].length === 0) {
        messagePrinter.errorPrint(ERROR_MESSAGE.more_than_five_letters);
      }
    }
  }

  async getTrialNumInput () {
    const trialNum = await messagePrinter.inputPrint(GAME_MESSAGE.get_trial_num);
    return trialNum;
  }

  async checkValidTrialNum (trialNum) {
    if (Number.isNaN(trialNum)) {
      messagePrinter.errorPrint(ERROR_MESSAGE.not_number);
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

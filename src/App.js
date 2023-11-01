import GAME_MESSAGE from './constant/gameMessage';
import AllCars from './models/AllCars';
import TrialNum from './models/TrialNum';
import messagePrinter from './utils/messagePrinter';
import eachRaceStart from './utils/eachRaceStart';
import printCurrentStatus from './utils/printCurrentStatus';
import printWinners from './utils/printWinners';

class App {
  #cars;

  #trials;

  #moveStatus;

  async play() {
    await this.getCarNameInput();
    await this.getTrialNumInput();
    await this.raceStart();
    printWinners(this.#cars, this.#moveStatus);
  }

  async getCarNameInput() {
    const carName = await messagePrinter.inputPrint(GAME_MESSAGE.get_car_name);
    const carNameArray = carName.split(',');
    const carClass = new AllCars(carNameArray);
    this.#cars = carClass.getCars();
  }

  async getTrialNumInput() {
    const trialNum = await messagePrinter.inputPrint(GAME_MESSAGE.get_trial_num);
    const trialNumClass = new TrialNum(trialNum);
    this.#trials = trialNumClass.getTrials();
  }

  async raceStart() {
    await messagePrinter.outputPrint(GAME_MESSAGE.line_break);
    await messagePrinter.outputPrint(GAME_MESSAGE.print_start_result);

    this.#moveStatus = new Array(this.#cars.length).fill(0);

    let i = 0;
    while (i < this.#trials) {
      const moveForwardArr = eachRaceStart(this.#cars);
      this.#moveStatus = this.#moveStatus.map((value, index) => value + moveForwardArr[index]);
      printCurrentStatus(this.#cars, this.#moveStatus);
      i += 1;
    }
  }
}

export default App;

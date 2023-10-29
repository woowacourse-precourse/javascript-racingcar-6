import Lap from './Lap.js';
import validate from './validation.js';
import MESSAGE from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.entry = [];
    this.lapLength = 0;
    this.finalRecord = [];
    this.winner = [];
  }

  async play() {
    await this.inputEntry();
    await this.inputLapLength();
    const lap = new Lap(this.entry, this.lapLength);

    Console.print(MESSAGE.RESULT);

    Array.from({ length: this.lapLength }, () => lap.printStage());
    this.printWinner(lap.record);
  }

  async inputEntry() {
    const inputName = await Console.readLineAsync(MESSAGE.INPUT_NAME);
    const tmpEntry = inputName.split(',');
    validate.carName(tmpEntry);
    this.entry = tmpEntry;
  }

  async inputLapLength() {
    const inputNum = await Console.readLineAsync(MESSAGE.ASK_LAP);
    validate.lapLength(inputNum);
    this.lapLength = inputNum;
  }

  printWinner(finalRecord) {
    finalRecord.forEach((record) => {
      const countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
      const carName = record.split(' ');
      if (countLength === parseInt(this.lapLength, 10)) this.winner.push(carName[0]);
    });

    if (this.winner.length === 0) Console.print(MESSAGE.NO_WINNER);
    else Console.print(`${MESSAGE.FINAL_WINNER + this.winner.join(', ')}`);
  }
}

export default App;

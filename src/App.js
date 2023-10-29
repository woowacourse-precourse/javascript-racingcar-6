import Lap from './game/Lap.js';
import validate from './game/validation.js';
import printResult from './game/printWinner.js';
import computer from './utils/console.js';
import ABOUT from './utils/constants.js';

class App {
  constructor() {
    this.entry = [];
    this.lapLength = 0;
    this.finalRecord = [];
  }

  async play() {
    await this.inputEntry();
    await this.inputLapLength();
    const lap = new Lap(this.entry, this.lapLength);
    computer.tell(ABOUT.RESULT_IS);
    Array.from({ length: this.lapLength }, () => lap.printStage());
    printResult(lap.record, this.lapLength);
  }

  async inputEntry() {
    const inputName = await computer.ask(ABOUT.INPUT_NAME);
    const tmpEntry = inputName.split(',');
    validate.carName(tmpEntry);
    this.entry = tmpEntry;
  }

  async inputLapLength() {
    const inputNum = await computer.ask(ABOUT.ASK_LAP);
    validate.lapLength(inputNum);
    this.lapLength = inputNum;
  }
}

export default App;

import Lap from './game/Lap.js';
import validate from './game/validation.js';
import printResult from './game/printResult.js';
import computer from './utils/console.js';
import ABOUT from './utils/constants.js';

class App {
  #entry;

  #lapLength;

  constructor() {
    this.#entry = [];
    this.#lapLength = 0;
  }

  async play() {
    await this.inputEntry();
    await this.inputLapLength();
    const lap = new Lap(this.#entry);
    computer.tell(ABOUT.RESULT_IS);
    // 실행횟수만큼 차수별 진행상황 출력
    Array.from({ length: this.#lapLength }, () => lap.recordCheck());
    printResult(lap.getRecord(), this.#lapLength);
  }

  async inputEntry() {
    // 자동차 이름 입력 받기
    const inputName = await computer.ask(ABOUT.INPUT_NAME);
    const tmpEntry = inputName.split(',');
    validate.carName(tmpEntry);
    this.#entry = tmpEntry;
  }

  async inputLapLength() {
    // 실행횟수 입력 받기
    const inputNumStr = await computer.ask(ABOUT.ASK_LAP);
    validate.lapLength(inputNumStr);
    this.#lapLength = Number(inputNumStr);
  }
}

export default App;

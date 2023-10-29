import Lap from './Lap.js';
import validate from './validation.js';
import printResult from './printWinner.js';
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
    await this.inputEntry(); // 자동차 이름 입력, 유효성 검사
    await this.inputLapLength(); // 실행 횟수 입력, 유효성 검사 진행
    const lap = new Lap(this.entry, this.lapLength); 
    // '실행 결과' 출력
    Console.print(MESSAGE.RESULT);
    // 차수별 전진 내용 출력
    Array.from({ length: this.lapLength }, () => lap.printStage());
    // 우승자 출력
    printResult(lap.record, this.lapLength, this.winner);
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
}

export default App;

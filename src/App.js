import Lap from './Lap.js';
import validate from './validation.js';
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

    Console.print(this.message('RESULT'));

    Array.from({ length: this.lapLength }, () => lap.printStage());
    this.printWinner(lap.record);
  }

  async inputEntry() {
    const inputName = await Console.readLineAsync(this.message('INPUT_NAME'));
    const tmpEntry = inputName.split(',');
    validate.carName(tmpEntry);
    this.entry = tmpEntry;
  }

  async inputLapLength() {
    const inputNum = await Console.readLineAsync(this.message('ASK_LAP'));
    validate.lapLength(inputNum);
    this.lapLength = inputNum;
  }

  message(option) {
    const MESSAGE = {
      INPUT_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      ASK_LAP: '시도할 횟수는 몇 회인가요?\n',
      RESULT: '\n실행 결과',
      NO_WINNER: '최종 우승자 : 없음',
    };
    return MESSAGE[option];
  }

  printWinner(finalRecord) {
    finalRecord.forEach((record) => {
      const countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
      const carName = record.split(' ');
      if (countLength === parseInt(this.lapLength, 10)) this.winner.push(carName[0]);
    });

    if (this.winner.length === 0) Console.print(this.message('NO_WINNER'));
    else Console.print(`최종 우승자 : ${this.winner.join(', ')}`);
  }
}

export default App;

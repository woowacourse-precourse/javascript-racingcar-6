import Lap from './Lap.js';
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
    for (let i = 0; i < this.lapLength; i += 1) {
      lap.printStage();
    }
    this.printWinner(lap.record);
  }

  async inputEntry() {
    const inputName = await Console.readLineAsync(this.message('INPUT_NAME'));
    const tmpEntry = inputName.split(',');
    this.entry = tmpEntry;
  }

  async inputLapLength() {
    const inputNum = await Console.readLineAsync(this.message('ASK_LAP'));
    this.lapLength = inputNum;
    Console.print('\n실행 결과');
  }

  message(option) {
    const MESSAGE = {
      INPUT_NAME:
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      ASK_LAP: '시도할 횟수는 몇 회인가요?\n',
    };
    return MESSAGE[option];
  }

  printWinner(finalRecord) {
    finalRecord.forEach((record) => {
      let countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
      let carName = record.split(' ');
      if (countLength === parseInt(this.lapLength, 10))
        this.winner.push(carName[0]);
    });
    if (this.winner.length === 0) Console.print('최종 우승자 : 없음');
    else Console.print(`최종 우승자 : ${this.winner.join(', ')}`);
  }
}

const app = new App();
app.play();

export default App;

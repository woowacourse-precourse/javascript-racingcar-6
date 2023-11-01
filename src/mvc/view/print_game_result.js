import { Console } from '@woowacourse/mission-utils';

class PrintGameResult {
  constructor(RACING_CNT, RESULT, WINNER) {
    this.RACING_CNT = RACING_CNT;
    this.RESULT = RESULT;
    this.WINNER = WINNER;
  }

  gameExecute() {
    const RACING_CAR = Object.keys(this.RESULT);
    for (let cnt = 0; cnt < Number(this.RACING_CNT); cnt += 1) {
      this.printGameExecute(RACING_CAR, cnt);
    }
  }

  printGameExecute(RACING_CAR, cnt) {
    RACING_CAR
      .forEach((carName) => {
        Console.print(`${carName} : ${'-'.repeat(this.RESULT[carName][cnt])}`);
      });
    Console.print('');
  }

  printGameWinner() {
    Console.print(`최종 우승자 : ${this.WINNER.join(', ')}`);
  }

  printGameResult() {
    Console.print('');
    Console.print('실행 결과');
    this.gameExecute();
    this.printGameWinner();
  }
}

export default PrintGameResult;

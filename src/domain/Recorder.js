import Console from '../Console.js';

class Recorder {
  #result = '\n실행 결과\n';

  record(name, moveCount) {
    this.#result += `${name} : ${'-'.repeat(moveCount)}\n`;
  }

  recordNextRound() {
    this.#result += '\n';
  }

  showResult() {
    Console.print(this.#result);
  }
}

export default Recorder;

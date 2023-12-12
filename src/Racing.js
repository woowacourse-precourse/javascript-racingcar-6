import { getRandomNum } from './Utils/getRandomNum.js';
import { InputView } from './View/InputView.js';
import { Console } from '@woowacourse/mission-utils';
import { OutputView } from './View/OutputView.js';
class Racing {
  #cars;
  #tryNum;
  #status;
  #statusNum;
  constructor() {}

  async getCars() {
    this.#cars = await InputView.readCarName();
    this.#status = Array.from({ length: this.#cars.length }, () => '');
    this.#statusNum = Array.from({ length: this.#cars.length }, () => 0);
  }
  async getTryNum() {
    this.#tryNum = await InputView.readTryNum();
  }
  isGo() {
    let goNum = 0;
    for (let j = 0; j < this.#cars.length; j++) {
      goNum = getRandomNum();
      if (goNum > 4) {
        this.#status[j] += '-';
        this.#statusNum[j] += 1;
      }
    }
  }
  printStatus() {
    for (let j = 0; j < this.#cars.length; j++) {
      Console.print(`${this.#cars[j]} : ${this.#status[j]}`);
    }
    OutputView.LineBreaking();
  }
  getWinner() {
    let max = 0;
    let winner = [];
    this.#statusNum.map((e) => {
      if (e > max) max = e;
    });
    this.#statusNum.map((e, i) => {
      if (e == max) winner.push(this.#cars[i]);
    });
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }

  startRacing() {
    for (let i = 0; i < this.#tryNum; i++) {
      this.isGo();
      this.printStatus();
    }
    this.getWinner();
  }
}

export default Racing;

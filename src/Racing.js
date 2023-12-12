import { getRandomNum } from './Utils/getRandomNum.js';
import { InputView } from './View/InputView.js';
import { Console } from '@woowacourse/mission-utils';
import { OutputView } from './View/OutputView.js';
class Racing {
  #cars;
  #tryNum;
  #status;
  constructor() {}

  async getCars() {
    this.#cars = await InputView.readCarName();
    console.log(this.#cars);
  }
  async getTryNum() {
    this.#tryNum = await InputView.readTryNum();
    console.log(this.#tryNum);
  }
  isGo() {
    let goNum = 0;
    for (let j = 0; j < this.#cars.length; j++) {
      goNum = getRandomNum();
      if (goNum > 4) {
        this.#status[j] += '-';
      }
    }
  }
  printStatus() {
    for (let j = 0; j < this.#cars.length; j++) {
      Console.print(`${this.#cars[j]} : ${this.#status[j]}`);
    }
    OutputView.LineBreaking();
  }
  startRacing() {
    this.#status = Array.from({ length: this.#cars.length }, () => '');
    for (let i = 0; i < this.#tryNum; i++) {
      this.isGo();
      this.printStatus();
    }
  }
}

export default Racing;

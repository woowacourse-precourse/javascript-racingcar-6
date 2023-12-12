import { InputView } from './View/InputView.js';

class Racing {
  #cars;
  #tryNum;
  constructor() {}

  async getCars() {
    this.#cars = await InputView.readCarName();
    console.log(this.#cars);
  }
  async getTryNum() {
    this.#tryNum = await InputView.readTryNum();
    console.log(this.#tryNum);
  }
}

export default Racing;

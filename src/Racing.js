import { InputView } from './View/InputView.js';

class Racing {
  #cars;
  constructor() {}

  async getCars() {
    this.#cars = await InputView.readCarName();
    console.log(this.#cars);
  }
}

export default Racing;

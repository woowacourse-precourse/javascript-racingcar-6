import { InputView } from './View/InputView';

class Racing {
  #cars;
  constructor() {}

  getCars() {
    this.#cars = InputView.readCarName;
  }
}

import InputView from "../view/InputView.js";

class Race {
  #inputView;

  constructor() {}

  async init() {
    const input = await InputView.readCarNames();
  }
}

export default Race;

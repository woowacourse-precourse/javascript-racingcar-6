import InputView from './views/InputView.js';

class App {
  constructor() {}

  async play() {
    const carName = await InputView.readcarName();
  }
}

export default App;

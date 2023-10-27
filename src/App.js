import InputView from './view/InputView.js';

class App {
  async play() {
    const carNames = await InputView.getCarNames();
  }
}

export default App;

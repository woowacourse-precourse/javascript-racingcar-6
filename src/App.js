import InputView from './InputView';

class App {
  async play() {
    await InputView.readCarNames();
  }
}

export default App;

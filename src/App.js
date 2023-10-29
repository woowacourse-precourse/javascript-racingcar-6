import InputView from './view/InputView.js';

class App {
  constructor() {
    this.game = new InputView();
  }

  async play() {
    await this.game.startGame();
  }
}

export default App;
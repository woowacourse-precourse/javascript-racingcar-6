import Game from './game.js';

class App {
  async play() {
    const game = new Game();
    await game.start();
  }
}

export default App;

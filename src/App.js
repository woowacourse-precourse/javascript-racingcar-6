import { MainGame } from './MainGame.js';

class App {
  async play() {
    const game = new MainGame();
    await game.start();
  }
}

export default App;

import GameStart from './views/GameStart';

class App {
  constructor() {
    this.GAME = new GameStart();
  }

  async play() {
    await this.GAME.startGame();
  }
}

export default App;

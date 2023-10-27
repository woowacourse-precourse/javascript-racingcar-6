import GameStart from './controller/GameStart';

class App {
  constructor() {
    this.GAME = new GameStart();
  }

  async play() {
    await this.GAME.startGame();
  }
}

export default App;

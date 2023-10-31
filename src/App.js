import Game from './Game';

class App {
  constructor() {
    this.game = new Game();
  }

  async play() {
    await this.game.start();
  }
}

// const app = new App();
// app.play();

export default App;

import Game from './Controller/Game';

class App {
  async play() {
    const game = new Game();
    await game.start();
  }
}

export default App;

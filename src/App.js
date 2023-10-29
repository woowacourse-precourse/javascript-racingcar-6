import RacingGame from './RacingGame.js';

class App {
  async play() {
    const game = new RacingGame();
    game.startGame();
  }
}

const app = new App();
app.play();

export default App;

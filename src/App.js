import { RacingGame } from './RacingGame.js';

class App {
  async play() {
    const game = new RacingGame();
    game.play(5, ['pobi', 'woni', 'jun']);
  }
}

const app = new App();
app.play();

export default App;

import RacingGame from './RacingGame.js';
import User from './User.js';
import Judge from './Judge.js';

class App {
  constructor() {
    this.judge = new Judge();
  }

  async play() {
    const game = new RacingGame(this.judge);
    const cars = await User.getRaceCars();
    const round = await User.getRaceRounds();
    await game.play(round, cars);
  }
}

export default App;

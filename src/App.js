import { Dice } from './Dice.js';
import { Judge } from './Judge.js';
import { RacingGame } from './RacingGame.js';

class App {
  async play() {
    const dice = new Dice();
    const judge = new Judge();
    const game = new RacingGame(dice, judge);
    const cars = await this.getRaceCars();
    const round = await this.getRaceRounds();
    game.play(round, cars);
  }
}

const app = new App();
app.play();

export default App;

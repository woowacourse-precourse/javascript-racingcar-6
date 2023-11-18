import { Referee, Game } from './domains/index.js';
import { OutputView } from './view/index.js';

class App {
  game = new Game();

  async play() {
    await this.game.start();
    OutputView.printPlayMessage();
    this.game.play();
    const carArray = this.game.getCarArray();
    const winners = Referee.decideGameResult(carArray);
    OutputView.printWinner(winners);
  }
}

export default App;

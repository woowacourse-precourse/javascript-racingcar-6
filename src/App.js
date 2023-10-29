import Game from './Game';
import Output from './Output';

class App {
  game = new Game();

  output = new Output();

  async play() {
    await this.game.start();
    this.output.printPlayMessage();
    while (
      (this.game.totalRound === 0 && this.game.currentRound === 0) ||
      this.game.currentRound < this.game.totalRound
    ) {
      this.game.play();
    }
    this.game.decideWinner();
  }
}

export default App;

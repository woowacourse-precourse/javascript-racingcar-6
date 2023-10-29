import Game from './Game';
import Output from './Output';

class App {
  game = new Game();

  output = new Output();

  async play() {
    await this.game.start();
    this.output.printPlayMessage();
    while (this.game.currentRound < this.game.totalRound) {
      this.game.play();
    }
  }
}

export default App;

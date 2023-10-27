import Game from './Game.js';
import MESSAGE from './Message.js';
import Output from './Output.js';

class App {
  game = new Game();

  output = new Output();

  async play() {
    await this.game.start();
    this.output.printMessage(MESSAGE.gameResult);
    while (this.game.currentRound < this.game.totalRound) {
      this.game.play();
    }
  }
}

export default App;

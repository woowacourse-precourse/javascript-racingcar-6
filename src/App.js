import Background from './Background.js';
import Controls from './Controls.js';

class App {
  constructor() {
    this.background = new Background();
  }

  async play() {
    const carNames = await Controls.getCarNames();
    const moves = await Controls.getMoves();

    this.background.initRace(carNames, moves);

    for (let i = 0; i < this.background.getMoves(); i += 1) {
      this.background.move();
      Controls.printCars(this.background.getCars());
    }

    const champions = this.background.champions();
    Controls.printChampions(champions);
  }
}

export default App;

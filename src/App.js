import racingCarGame from './game/index.js';

class App {
  constructor() {
    this.moveCount = 0;
    this.racingStatus = [];
  }

  async ready() {
    const { carNameArray, moveCount } =
      await racingCarGame.promptToRacingObject();
    this.moveCount = moveCount;
    this.racingStatus = racingCarGame.makeCarsWithForwardCount(carNameArray);
  }

  async play() {
    await this.ready();

    for (let turn = 0; turn < this.moveCount; turn += 1) {
      const turnResult = racingCarGame.runRacingTurn(this.racingStatus);
      this.racingStatus = turnResult;
    }
  }
}

export default App;

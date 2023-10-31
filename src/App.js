import printMsg from '../utils/printMsg';
import RacingCarGame from './game';
import MESSAGE from './game/game.message';

class App {
  constructor() {
    this.moveCount = 0;
    this.carStatusArray = [];
    this.racingMethod = new RacingCarGame();
  }

  async ready() {
    const { carNameArray, moveCount } =
      await this.racingMethod.promptToRacingObject();
    this.moveCount = moveCount;
    this.carStatusArray =
      this.racingMethod.makeCarsWithForwardCount(carNameArray);
  }

  async play() {
    await this.ready();

    printMsg(MESSAGE.start);
    for (let turn = 0; turn < this.moveCount; turn += 1) {
      const turnResult = this.racingMethod.runRacingTurn(this.carStatusArray);
      this.carStatusArray = turnResult;
    }

    this.finish();
  }

  finish() {
    this.racingMethod.printWinner(this.carStatusArray);
  }
}

export default App;

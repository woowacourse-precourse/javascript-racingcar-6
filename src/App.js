import Game from './module/Game.js';
import { validateCarName, validateMoveNum } from './utils/validateFn.js';

class App {
  async play() {
    const game = new Game();
    await game.init();
    const { myCars } = game.getCarGameInfo();
    validateCarName(myCars);

    await game.createCars();

    await game.moveQuestion();
    const { moveNum } = game.getCarMoveNum();
    validateMoveNum(moveNum);

    await game.process();
    await game.printWinner();
  }
}

export default App;

import Game from './module/Game.js';
import { validateCarName, validateMoveNum } from './utils/validateFn.js';

class App {
  async play() {
    const game = new Game();

    const carListArr = await game.init();
    validateCarName(carListArr);

    await game.createCars();

    const moveNum = await game.moveQuestion();
    validateMoveNum(moveNum);

    await game.process();
    await game.printWinner();
  }
}

export default App;

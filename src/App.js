import GetCarsName from './GetCarsName.js';
import GetTryNumber from './GetTryNumber.js';
import Game from './Game.js';

class App {
  async play() {
    const getCarsName = new GetCarsName();
    const carsList = await getCarsName.getCarsNameList();

    const getTryNumber = new GetTryNumber();
    const tryNumber = await getTryNumber.getTryNumber();

    const game = new Game(carsList, tryNumber);
    game.gameStart();
  }
}

const app = new App();
app.play();

export default App;

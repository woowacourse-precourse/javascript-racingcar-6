import getCarName from './getCarName';
import getTryCount from './getTryCount';
import printWinner from './printWinner';
import startGame from './startGame';

class App {
  async play() {
    const CAR_NAMES = await getCarName();
    const TRY_COUNT = await getTryCount();

    const GO_COUNT = await startGame(CAR_NAMES, TRY_COUNT);

    printWinner(CAR_NAMES, GO_COUNT);
  }
}

export default App;

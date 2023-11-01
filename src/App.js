import getCarName from './getCarName';
import getTryCount from './getTryCount';
import startGame from './startGame';

class App {
  async play() {
    const CAR_NAMES = await getCarName();
    const TRY_COUNT = await getTryCount();

    startGame(CAR_NAMES, TRY_COUNT);
  }
}

export default App;

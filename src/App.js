import { getCarArrFromInputValue, getTryNumber } from './utils.js';
import RacingGame from './RacingGame.js';

class App {
  async play() {
    let carArr = await getCarArrFromInputValue();
    let tryNum = await getTryNumber();

    RacingGame(carArr, tryNum);
  }
}

export default App;

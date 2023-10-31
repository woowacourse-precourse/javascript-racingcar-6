import getAndValidateCarNames from './CarNames';
import getAndValidateTryCount from './TryCount';
import race from './Race';
import findAndPrintWinner from './Winner';

class App {
  async play() {
    const carNamesArray = await getAndValidateCarNames();
    const tryCount = await getAndValidateTryCount();
    const raceResults = race(carNamesArray, tryCount);
    findAndPrintWinner(carNamesArray, raceResults);
  }
}

export default App;

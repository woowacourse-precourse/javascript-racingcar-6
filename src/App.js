import getCarName from './getCarName';
import getRoundNumber from './getRoundNumber';
import showRace from './showRace';

class App {
  async play() {
    const CAR_NAME = await getCarName();
    const ROUND_NUMBER = await getRoundNumber();
    await showRace(CAR_NAME, ROUND_NUMBER);
  }
}

export default App;

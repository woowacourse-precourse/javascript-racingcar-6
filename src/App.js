import getCarName from './getCarName';
import getRoundNumber from './getRoundNumber';
import showRace from './showRace';

class App {
  async play() {
    const carName = await getCarName();
    const roundNumber = await getRoundNumber();
    await showRace(carName, roundNumber);
  }
}

export default App;

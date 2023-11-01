import Input from './Input.js';
import RaceRound from './RaceRound.js';
import CarsInfo from './CarsInfo.js';

async function recieveUserInput() {
  const names = await Input.enterCarNames();
  const totalRound = await Input.enterTotalRound();
  return { names, totalRound };
}

function initializeRaceRound(userInput) {
  const carsInfo = new CarsInfo(userInput.names);
  return new RaceRound(carsInfo, userInput.totalRound);
}
class App {
  async play() {
    const userInput = await recieveUserInput();

    const raceRound = initializeRaceRound(userInput);
    raceRound.proceedRound();
    raceRound.announceGameResult();
  }
}

export default App;
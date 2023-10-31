import { Console } from '@woowacourse/mission-utils';
import { RACE } from './Logs.js';
import RaceUtils from './RaceUtils.js';
import GameSetup from './GameSetup.js';


class App {
  constructor() {
    this.playersData = [];
    this.winners = [];
    this.raceEntry = [];
    this.tryNumber = [];
  }

  async play() {
    await this.initRaceSetting();
    this.startRace();
  }

  async initRaceSetting() {
    this.raceEntry = await GameSetup.getPlayerCarsInput();
    this.playersData = GameSetup.createPlayerData(this.raceEntry);
    this.tryNumber = await GameSetup.getPlayerTryNumberInput();
  }

  startRace() {
    Console.print(RACE.START);
    for ( let i = 0; i < this.tryNumber; i +=1) {
      this.playersData = RaceUtils.proceedEachRaceTurn(this.playersData);
      RaceUtils.printRaceStatus(this.playersData);
    }
    this.winners = RaceUtils.findWinners(this.playersData);
    RaceUtils.announceWinners(this.winners);
  }
}

export default App;

import { Console } from '@woowacourse/mission-utils';
import { PLAYER_INPUT, RACE } from './Logs';
import Validation from './Validation';
import RaceUtils from './RaceUtils';

class App {
  constructor() {
    this.playersData = [];
    this.winners = [];
    this.raceEntry = [];
    this.tryNumber = 0;
  }

  async play() {
    await this.getPlayerCarsInput();
    this.createPlayerData(this.raceEntry);
    await this.getPlayerTryNumberInput();
    this.startRace();
    RaceUtils.announceWinners(this.winners);
  }

  async getPlayerCarsInput() {
    const CAR_NAMES_INPUT = await Console.readLineAsync(
      PLAYER_INPUT.CARS_NAME_PROMPT,
    );
    const CAR_NAMES_INPUT_ARRAY = CAR_NAMES_INPUT.split(',');

    if (Validation.isPlayerCarNameValidated(CAR_NAMES_INPUT_ARRAY)) {
      this.raceEntry = [...CAR_NAMES_INPUT_ARRAY];
    }
  }

  createPlayerData() {
    this.raceEntry.forEach(playerName => {
      this.playersData.push({ playerName, trackLocation: '' });
    });
  }

  async getPlayerTryNumberInput() {
    const TRY_NUMBER_INPUT = await Console.readLineAsync(
      PLAYER_INPUT.TRY_NUMBER_PROMPT,
    );
    if (Validation.isPlayerTryNumberValidated(TRY_NUMBER_INPUT)) {
      this.tryNumber = Number(TRY_NUMBER_INPUT);
    }
  }

  startRace() {
    Console.print(RACE.START);
    for (let i = 0; i < this.tryNumber; i += 1) {
      this.playersData = RaceUtils.proceedEachRaceTurn(this.playersData);
      RaceUtils.printRaceStatus(this.playersData);
    }
    this.winners = RaceUtils.findWinners(this.playersData);
  }
}

export default App;

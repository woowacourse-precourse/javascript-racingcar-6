import { Console, Random } from '@woowacourse/mission-utils';
import { PLAYER_INPUT, RACE } from './Logs.js';
import {
  isPlayerCarNameValidated,
  isPlayerTryNumberValidated,
} from './Validation.js';

class App {
  constructor() {
    this.playersData = [];
    this.winners = [];
  }

  async play() {
    const raceEntry = await this.getPlayerCarsInput();
    this.createPlayerData(raceEntry);
    const tryNumber = await this.getPlayerTryNumberInput();
    this.startRace(tryNumber);
  }

  async getPlayerCarsInput() {
    const userInput = await Console.readLineAsync(
      PLAYER_INPUT.CARS_NAME_PROMPT,
    );
    const raceEntry = userInput.split(',');

    if (isPlayerCarNameValidated(raceEntry)) {
      return [...raceEntry];
    }
  }

  createPlayerData(raceEntry) {
    raceEntry.forEach(playerName => {
      this.playersData.push({ playerName, trackLocation: '' });
    });
  }

  async getPlayerTryNumberInput() {
    const userInput = await Console.readLineAsync(
      PLAYER_INPUT.TRY_NUMBER_PROMPT,
    );
    if (isPlayerTryNumberValidated(userInput)) {
      return userInput;
    }
  }

  shouldMoveForward() {
    const pickedNumber = Random.pickNumberInRange(0, 9);
    return pickedNumber >= 4;
  }

  addCarMoveProgressBar(player) {
    player.trackLocation = player.trackLocation.concat(RACE.PROGRESS_BAR);
  }

  checkWinners() {
    const FARTHEST_TRACK_LOCATION = Math.max(
      ...this.playersData.map(player => player.trackLocation.length),
    );
    this.winners.push(
      ...this.playersData.filter(
        player => player.trackLocation.length === FARTHEST_TRACK_LOCATION,
      ),
    );
  }

  startRace(tryNumber) {
    Console.print(RACE.START);
    for (let i = 0; i < tryNumber; i++) {
      this.proceedRaceTurn();
    }
  }

  proceedRaceTurn() {
    this.playersData.forEach(player => {
      if (this.shouldMoveForward()) {
        this.addCarMoveProgressBar(player);
      }
    });
    this.playersData.forEach(player => {
      const line = `${player.playerName} : ${player.trackLocation}`;
      Console.print(line);
    });
  }
}

export default App;

const app = new App();
app.play();

// 필요한 함수들
// startRace
// addCarMoveProgressBar
// checkWinners
// printRaceStatus
// printWinners

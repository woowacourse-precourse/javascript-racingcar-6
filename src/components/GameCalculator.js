import { Console } from '@woowacourse/mission-utils';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import RaceManager from './RaceManager.js';
import GameInformationOrganizer from './GameInformationOrganizer.js';

class GameCalculator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCarsArr = userInputCars.split(',');
    this.userInputTryCount = userInputTryCount;
    this.arrForRace = null;
    this.gameInformationObj = null;
  }

  calculate() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator(
      this.userInputTryCount,
      this.userInputCarsArr.length
    );

    this.arrForRace = RANDOM_NUMBER_GENERATOR.generateRandomNumber();
    const GAME_INFORMATION_ORGANIZER = new GameInformationOrganizer(
      this.userInputCarsArr,
      this.arrForRace
    );

    this.gameInformationObj =
      GAME_INFORMATION_ORGANIZER.createGameInformationObj();

    const RACE_MANAGER = new RaceManager(this.gameInformationObj);
  }
}

export default GameCalculator;

import { Console } from '@woowacourse/mission-utils';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import RaceManager from './RaceManager.js';
// import GameInformationOrganizer from './GameInformationOrganizer.js';

class GameCalculator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCarsArr = userInputCars.split(',');
    this.userInputTryCount = userInputTryCount;
    this.arrForRace = null;
    // this.gameInformationArr = null;
  }

  calculate() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator(
      this.userInputTryCount,
      this.userInputCarsArr.length
    );

    this.arrForRace = RANDOM_NUMBER_GENERATOR.generateRandomNumber();

    // const GAME_INFORMATION_ORGANIZER = new GameInformationOrganizer(
    //   this.userInputCarsArr,
    //   this.arrForRace
    // );

    // this.gameInformationArr =
    //   GAME_INFORMATION_ORGANIZER.createGameInformationArr();

    const RACE_MANAGER = new RaceManager(this.arrForRace);
  }
}

export default GameCalculator;

import { Console } from '@woowacourse/mission-utils';

// 자동차 경기 모듈
import RacingCar from './RacingCar';
import RaceOrganizer from './view/RaceOrganizer';

// 예외 사항 모듈
import BaseExceptionHandler from './exception/Errorcase';
import CarNaming from './exception/CarNaming';
import Frequency from './exception/Frequency';

// 상수 모듈
import { COMMENT, SPECIALCHARS } from './utils/Constants';

class App {
  #racingCar;

  #exceptionHandler;

  constructor() {
    this.#racingCar = new RacingCar();
    this.#exceptionHandler = new BaseExceptionHandler();
  }

  async play() {
    await this.enterValue();
  }

  async enterValue() {
    try {
      const carName = await this.enterCarName();
      const gameLap = await this.enterRaceLaps();

      this.#startRacingGame(carName, gameLap);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async enterCarName() {
    try {
      const name = await Console.readLineAsync(COMMENT.INPUT_NAME);
      const carName = this.convertToArray(name);
      this.#exceptionHandler.checkAllException(new CarNaming(carName));
      return carName;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async enterRaceLaps() {
    try {
      const gameLap = await Console.readLineAsync(COMMENT.INPUT_LAPS);
      this.#exceptionHandler.checkAllException(new Frequency(gameLap));

      return gameLap;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  convertToArray(string) {
    return string.split(SPECIALCHARS.COMMA);
  }

  #startRacingGame(carName, lap) {
    const entry = this.#racingCar.createEntry(carName);
    const carMove = this.#racingCar.moveForwardCar(entry, lap);

    RaceOrganizer.talkToWinner(carMove);
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";

import RacingCar from "./RacingCar";
import RaceOrganizer from "./view/RaceOrganizer";

import BaseExceptionHandler from "./exception/Errorcase";
import CarNaming from "./exception/CarNaming";
import Frequency from "./exception/Frequency";

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
      const name = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
      );
      const carName = this.#convertToArray(name);
      this.#exceptionHandler.checkAllException(new CarNaming(carName));

      return carName;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async enterRaceLaps() {
    try {
      const gameLap = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
      this.#exceptionHandler.checkAllException(new Frequency(gameLap));

      return gameLap;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  #convertToArray(string) {
    return string.split(",");
  }

  #startRacingGame(carName, lap) {
    const entry = this.#racingCar.createEntry(carName);
    const carMove = this.#racingCar.moveFowardCar(entry, lap);

    RaceOrganizer.talkToWinner(carMove);
  }
}

export default App;

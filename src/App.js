import { Console } from "@woowacourse/mission-utils";

import RacingCar from "./RacingCar.js";
import RaceOrganizer from "./view/RaceOrganizer.js";

import BaseExceptionHandler from "./exception/Errorcase.js";
import CarNaming from "./exception/CarNaming.js";

class App {
  #racingCar;
  #exceptionHandler;
  constructor() {
    this.#racingCar = new RacingCar();
    this.#exceptionHandler = new BaseExceptionHandler();
  }

  #convertToArray(string) {
    return string.split(",");
  }

  async play() {
    await this.enterValue();
  }

  async enterValue() {
    try {
      const name = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
      );
      const carName = this.#convertToArray(name);
      this.#exceptionHandler.checkAllException(new CarNaming(carName));

      const gameLap = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
      // 게임 횟수 예외사항 처리

      this.#startRacingGame(carName, gameLap);
    } catch (error) {
      throw new Error(error);
    }
  }

  #startRacingGame(carName, lap) {
    const entry = this.#racingCar.createEntry(carName);
    const carMove = this.#racingCar.moveFowardCar(entry, lap);

    RaceOrganizer.talkToWinner(carMove);
  }
}

// const app = new App();
// app.play();

export default App;

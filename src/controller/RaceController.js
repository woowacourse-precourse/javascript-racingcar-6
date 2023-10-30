import { Console } from '@woowacourse/mission-utils';
import CarRace from '../model/CarRace';
import InputView from '../view/InputView';

class RaceController {
  constructor() {
    this.carRace = new CarRace();
  }

  runRace() {
    this.insertCarNames();
  }

  insertCarNames() {
    InputView.inputCarNames(carNames => {
      try {
        this.carRace.makeCarList(carNames);
        this.insertTryCount();
      } catch (error) {
        Console.print(error);
        this.insertCarNames();
      }
    });
  }

  insertTryCount() {
    InputView.inputTryCount(tryCount => {
      try {
        this.carRace.setTryCount(tryCount);
        const result = this.carRace
          .makeCarList()
          .getRace()
          .getWinners()
          .getResult();
        Console.print(result);
      } catch (error) {
        Console.print(error);
        this.insertTryCount();
      }
    });
  }
}

export default RaceController;

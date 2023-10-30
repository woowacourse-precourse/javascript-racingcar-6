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
        Console.print(
          '[ERROR] 유효하지 않은 자동차 이름입니다. 다시 입력해주세요.',
        );
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
        Console.print(
          '[ERROR] 유효하지 않은 시도 횟수입니다. 다시 입력해주세요.',
        );
        this.insertTryCount();
      }
    });
  }
}

export default RaceController;

import { Console, Random } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import ErrorHandler from './ErrorHandler.js';

class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.location += 1;
    }
  }
}

class SettingCars {
  async registerCars() {
    const carNameList = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameArray = carNameList.split(',');

    const validation = new Validation();
    const errorHandler = new ErrorHandler();
    const registeredCars = carNameArray.map((carName) => {
      if (!validation.isValidCarName(carName)) {
        errorHandler.throwInvalidCarNameError();
      }

      return new Car(carName);
    });

    return registeredCars;
  }
}

export default SettingCars;

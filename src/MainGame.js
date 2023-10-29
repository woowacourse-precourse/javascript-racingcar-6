import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Car } from './Car.js';

class MainGame {
  start = async () => {
    Console.print(Message.INPUT_CAR_NAME);
    const carNameList = await this.inputCarName();
    const attemptsNumber = await this.inputAttemptsNumber();
    await this.printExecutionResult();

    const cars = carNameList.map((name) => new Car(name));
  };

  static isSplitComma = (carNameList) => {
    if (carNameList.split(',').length == 1) {
      throw new Error(Message.ERROR.NOT_SPLIT_COMMA);
    }
    return;
  };

  static isFiveLength = (carNameList) => {
    let carName = carNameList.split(',');

    for (let i = 0; i < carName.length; i++) {
      if (carName[i].length < 1 || carName[i].length > 5) {
        throw new Error(Message.ERROR.NOT_FIVE_FIGURES);
      }
    }
  };

  static isIncludeBlank = (carNameList) => {
    let carName = carNameList.split(',');
    for (let i = 0; i < carName.length; i++) {
      if (carName[i].includes(' ')) {
        throw new Error(Message.ERROR.INCLUDES_BLANK);
      }
    }
  };

  inputCarName = async () => {
    const carNameList = await Console.readLineAsync('');
    MainGame.isSplitComma(carNameList);
    MainGame.isFiveLength(carNameList);
    MainGame.isIncludeBlank(carNameList);
    return carNameList.split(',');
  };

  static isNumber = (attemptsNumber) => {
    if (!/^[1-9]\d*$/.test(attemptsNumber)) {
      throw new Error(Message.ERROR.NOT_NUMBER);
    }
  };

  inputAttemptsNumber = async () => {
    Console.print(Message.INPUT_NUMBER_OF_ATTEMPTS);
    const attemptsNumber = await Console.readLineAsync('');
    MainGame.isNumber(attemptsNumber);
    return attemptsNumber;
  };

  printExecutionResult = () => {
    Console.print(`\n${Message.EXECUTION_RESULT}`);
  };
}

export { MainGame };

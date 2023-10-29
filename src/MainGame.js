import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';

class MainGame {
  start = async () => {
    Console.print(Message.INPUT_CAR_NAME);
    await this.inputCarName();
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

  inputCarName = async () => {
    const carNameList = await Console.readLineAsync(''); // 사용자 입력을 받기 위해 await 추가
    MainGame.isSplitComma(carNameList);
    MainGame.isFiveLength(carNameList);
  };
}

export { MainGame };

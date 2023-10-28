import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';

class MainGame {
  start = () => {
    Console.print(Message.INPUT_CAR_NAME);
    this.inputCarName();
  };

  static isSplitComma = (carNameList) => {
    if (carNameList.split(',').length == 1) {
      throw new Error(Message.ERROR.NOT_SPLIT_COMMA);
    }
  };

  inputCarName = async () => {
    const carNameList = await Console.readLineAsync(''); // 사용자 입력을 받기 위해 await 추가
    MainGame.isSplitComma(carNameList);
  };
}

export { MainGame };

import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const CAR_LIST_INPUT = await MissionUtils.Console.readLineAsync('');
    const CAR_LIST = CAR_LIST_INPUT.split(',');
    CAR_LIST.forEach((CAR_NAME) => {
      if (CAR_NAME.length > 5) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다');
      }
    });
  }
}

export default App;

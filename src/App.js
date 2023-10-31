import { Console } from '@woowacourse/mission-utils';
import userInput from './userInput.js';


class App {
  async play() {
    const userInputData = await userInput();
    const nameList = userInputData[0]
    const round = userInputData[1]

    //입력 이름이 5글자 초과 시 예외처리
    if (nameList.some((name) => name.length > 5)) {
      throw new Error('[ERROR]');
    }

  }
}

export default App;

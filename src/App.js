import { Console } from '@woowacourse/mission-utils';
import userInput from './userInput.js';
import moveCar from './moveCar.js';
import printCarStatus from './printCarStatus.js';

class App {
  async play() {
    const userInputData = await userInput();
    const nameList = userInputData[0]
    const round = userInputData[1]

    //입력 이름이 5글자 초과 시 예외처리
    if (nameList.some((name) => name.length > 5)) {
      throw new Error('[ERROR]');
    }

    const carCount = nameList.map(() => 0);

    Console.print('실행 결과');

    for (let i = 0; i < round; i += 1) {
      moveCar(carCount);
      printCarStatus(nameList, carCount);
    }

    const maxCount = Math.max(...carCount);
    const winners = nameList.filter((_, idx) => carCount[idx] === maxCount);

    Console.print(`최종우승자 : ${winners.join(', ')}`);
  }
}

export default App;

// views/CarRaceView.js
import { Console } from '@woowacourse/mission-utils';

class CarRaceView {
  static async readCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }

  static async readMoveCount() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }

  static printOutput(message) {
    Console.print(message);
  }

  static printProgress(key, value) {
    Console.print(`${key} : ${value}`);
  }

  static printNewline() {
    Console.print('\n');
  }
}

export default CarRaceView;

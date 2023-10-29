import { Console } from '@woowacourse/mission-utils';
import Validator from './utils/Validator.js';

class App {
  static getCarNamesInput() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  static getMoveCountInput() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  static splitAndValidate(carNames) {
    Validator.validateUndefinedOrNullOrSpacesOrLengthZero(carNames);
    carNames.split(',').forEach(name => {
      Validator.isMaxLengthFive(name);
    });
    return true;
  }

  static async startGame() {
    const carNames = await App.getCarNamesInput();
    App.splitAndValidate(carNames);
    const moveCount = await App.getMoveCountInput();
    Validator.validateMoveCount(moveCount);
  }

  async play() {
    App.startGame();
  }
}

export default App;

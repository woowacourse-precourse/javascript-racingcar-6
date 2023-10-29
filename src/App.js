import { Console, Random } from '@woowacourse/mission-utils';
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

  static ValidateCarNames(arrayedCarNames) {
    Validator.validateUndefinedOrNullOrSpacesOrLengthZero(arrayedCarNames[0]);
    arrayedCarNames.forEach(name => {
      Validator.isMaxLengthFive(name);
    });
    return true;
  }

  static isMinNumFour() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  static calculateRaceProgress(raceProgressGraph) {
    return raceProgressGraph.map((_, idx) => {
      if (App.isMinNumFour()) return `${raceProgressGraph[idx]}-`;
      return raceProgressGraph[idx];
    });
  }

  static printRaceResults(arrayedCarNames, raceProgressGraph) {
    let RaceResults = '';
    arrayedCarNames.forEach((car, idx) => {
      RaceResults = `${RaceResults}${car} : ${raceProgressGraph[idx]}\n`;
    });
    Console.print(RaceResults);
  }

  static simulateCarRace(arrayedCarNames, moveCount) {
    let raceProgressGraph = Array.from(
      { length: arrayedCarNames.length },
      () => '',
    );
    let copiedMoveCount = moveCount;
    Console.print('\n실행 결과');
    while (copiedMoveCount) {
      raceProgressGraph = App.calculateRaceProgress(raceProgressGraph);
      App.printRaceResults(arrayedCarNames, raceProgressGraph);
      copiedMoveCount -= 1;
    }
  }

  static async startGame() {
    const carNames = await App.getCarNamesInput();
    const arrayedCarNames = carNames.split(',');
    App.ValidateCarNames(arrayedCarNames);
    const moveCount = await App.getMoveCountInput();
    Validator.validateMoveCount(moveCount);
    this.simulateCarRace(arrayedCarNames, moveCount);
  }

  async play() {
    App.startGame();
  }
}

export default App;

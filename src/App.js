import {Console} from '@woowacourse/mission-utils';
import {validateCarNamesString, validateCountString} from './validation.js';
import {getCarsMovementInfo, getWinners, printCarsMovementInfo, printWinners} from './game.js';

class App {
  async play() {
    const carNamesAsString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    validateCarNamesString(carNamesAsString);
    const carNames = carNamesAsString.split(',');

    const countAsString = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validateCountString(countAsString);
    const count = Number(countAsString);

    Console.print('\n실행 결과');

    const carsMovementInfo = getCarsMovementInfo(carNames, count);
    const winners = getWinners(carsMovementInfo);

    printCarsMovementInfo(carsMovementInfo);
    Console.print('\n');

    printWinners(winners);
  }
}

export default App;

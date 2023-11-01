import { Console } from '@woowacourse/mission-utils';
import InputValidation from './InputValidation.js';
import Race from './RacingProcess.js';

const inputValidation = new InputValidation();
const race = new Race();

class App {
  async play() {
    let carNameArr = await this.getCarName();
    inputValidation.isCarNameValid(carNameArr);

    let roundCount = await this.getRoundCount();
    inputValidation.isRoundCountValid(roundCount);

    let carArr = race.createCarArray(carNameArr);

    Console.print('\n실행 결과');
    race.runRace(carArr, roundCount);

    let winners = race.getWinner(carArr);
    Console.print(`최종 우승자 : ${winners}`);
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNameArr = carNames.split(',');
    return carNameArr;
  }

  async getRoundCount() {
    const roundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return roundCount;
  }
}

export default App;

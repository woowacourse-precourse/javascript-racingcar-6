import { MissionUtils } from '@woowacourse/mission-utils';
import { checkNames, checkRounds } from './modules/checkUserInput.js';
import { startRound } from './modules/startRound.js';

class App {
  async play() {
    const namesArray = await this.getCarNames();
    const rounds = await this.getRounds();

    MissionUtils.Console.print('\n실행 결과');

    // 점수를 저장할 객체
    const scoreObject = {};
    namesArray.forEach(carName => {
      scoreObject[`${carName}`] = 0;
    });

    for (let i = 0; i < rounds; i++) {
      startRound(namesArray, scoreObject);
      this.printRoundResult(namesArray, scoreObject);
      MissionUtils.Console.print('\n');
    }

    const winnersArray = this.getWinners(namesArray, scoreObject);
    const winnersString = winnersArray.join(', ');
    MissionUtils.Console.print(`최종 우승자 : ${winnersString}`);
  }

  async getCarNames() {
    const namesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    checkNames(namesInput);
    const namesArray = namesInput.split(',');
    return namesArray;
  }

  async getRounds() {
    const roundsInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    checkRounds(roundsInput);
    return parseInt(roundsInput);
  }

  printRoundResult(namesArray, scoreObject) {
    // 라운드에 대한 실행 결과 출력
    namesArray.forEach((car, index) => {
      const scoreCount = '-'.repeat(scoreObject[`${car}`]);
      MissionUtils.Console.print(`${car} : ${scoreCount}`);
    });
  }

  getWinners(namesArray, scoreObject) {
    let winners = [namesArray[0]];
    for (let i = 0; i < namesArray.length - 1; i++) {
      const oneCar = winners[0];
      const oneScore = scoreObject[`${oneCar}`];
      const anotherCar = namesArray[i + 1];
      const anotherScore = scoreObject[`${anotherCar}`];

      winners = anotherScore > oneScore ? [anotherCar] : winners;
      winners = oneScore === anotherScore ? [...winners, anotherCar] : winners;
    }
    return winners;
  }
}

export default App;

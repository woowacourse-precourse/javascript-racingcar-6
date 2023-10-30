import { MissionUtils } from '@woowacourse/mission-utils';
import { checkNames, checkRounds } from './modules/checkUserInput.js';

class App {
  async play() {
    const namesArray = await this.getCarNames();
    const rounds = await this.getRounds();

    MissionUtils.Console.print('\n실행 결과');

    // 점수를 저장할 객체
    const scoreObject = {};
    namesArray.forEach((carName, index) => {
      scoreObject[`${carName}`] = 0;
    });

    for (let i = 0; i < rounds; i++) {
      this.startRound(namesArray, scoreObject);
    }
    MissionUtils.Console.print(scoreObject);
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

  startRound(namesArray, scoreObject) {
    // 랜덤으로 점수 + 1
    namesArray.forEach(carName => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        scoreObject[`${carName}`] += 1;
      }
    });
  }
}

const a = new App();
a.play();

export default App;

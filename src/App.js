import Race from './Race.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const inputCars = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = inputCars.split(',').map((name) => name.trim());

    carNames.map((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
      }
    });

    const numberOfAttempts = parseInt(
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );

    if (isNaN(numberOfAttempts)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    const race = new Race(carNames);

    for (let i = 0; i < numberOfAttempts; i++) {
      race.playTurn();
      if (i === 0) {
        MissionUtils.Console.print('\n실행 결과');
      }
      race.printStatus();
    }

    const winners = race.getWinners();

    if (winners.length === 1) {
      MissionUtils.Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }
}

const app = new App();
app.play();

export default App;

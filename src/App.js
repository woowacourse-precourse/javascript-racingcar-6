import { MissionUtils } from '@woowacourse/mission-utils';
import Race from './Race.js';

class App {
  async play() {
    const namesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = namesInput.split(',');
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    const attemptsInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const attempts = Number(attemptsInput);
    const isInvalidNumber = Number.isNaN(attempts);
    if (isInvalidNumber) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    MissionUtils.Console.print('\n실행 결과');
    const race = new Race(names);
    for (let i = 0; i < attempts; i += 1) {
      race.moveAllCars();
      race.displayAllCars();
      MissionUtils.Console.print('');
    }

    const winners = race.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;

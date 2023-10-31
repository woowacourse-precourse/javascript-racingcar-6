import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const string = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = string.split(',');
    const results = [];
    for (let i = 0; i < names.length; i += 1) {
      results.push([]);
    }
    const number = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );

    MissionUtils.Console.print('\n실행 결과');
  }
}

export default App;

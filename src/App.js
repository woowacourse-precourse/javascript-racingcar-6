import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.startMessage =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    this.countMessage = '시도할 횟수는 몇 회인가요?\n';
  }

  async play() {
    const userCar = await MissionUtils.Console.readLineAsync(this.startMessage);
    const userCount = await MissionUtils.Console.readLineAsync(
      this.countMessage,
    );
  }
}

export default App;

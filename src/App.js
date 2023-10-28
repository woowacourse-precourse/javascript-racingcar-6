import { Console } from '@woowacourse/mission-utils';


class App {
  async play() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const totalAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!this.isValidCarNames(carNames)) {
      throw new CustomError(',로 구분하여 2인 이상 이름을 입력해주세요');
    }
    if (!this.isValidTotalAttempts(totalAttempts)) {
      throw new CustomError('1회 이상 100회 이하의 횟수만 가능합니다');
    }
  }
}

export default App;
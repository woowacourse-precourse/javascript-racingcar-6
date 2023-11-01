import { Console } from '@woowacourse/mission-utils'

class App {
  #Cars = [];

  parseCarNames() {
    const input = Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return input.split(',');
  }
}

export default App;

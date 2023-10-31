import { Console } from '@woowacourse/mission-utils';
import { carname } from './CarName.js';
import { trynumber } from './TryNumber.js';

class App {
  // prettier-ignore
  async play() {
    let name = carname(await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',));
    let count = trynumber(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),);
    let result_menu = movement();
    let result = repeat();

    Console.print('실행 결과\n', result_menu);
    Console.print(result);
  }
}

export default App;

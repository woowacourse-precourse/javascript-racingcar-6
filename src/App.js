import { Console } from '@woowacourse/mission-utils';
import { carname } from './CarName.js';
import { trynumber } from './TryNumber.js';
import { movement } from './Movement.js';
import { winner } from './Winner.js';

class App {
  // prettier-ignore
  async play() {
    let name = carname(await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',));
    let move = new Array(name.length).fill(0);
    let count = trynumber(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
    Console.print(``);
    Console.print('실행 결과');
    let result_menu = movement(count,name, move);
    let result_ranking = winner(result_menu, name);
    Console.print(`최종 우승자 : ${result_ranking.join(',')}`);
  }
}

export default App;

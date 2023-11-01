import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../Constant/constants';

const OutputView = {
  // 결과 출력
  async outputResult() {
    console.log(GAME.RESULT);
  },
  // 게임 진행 출력
  async outputBoard(name, count) {
    Console.print(`${name} : ${'-'.repeat(count)}`);
  },
  // 우승자 출력
  async outputWinner(winner) {
    Console.print(GAME.WINNER + String(winner.join(', ')));
  },
};

export default OutputView;

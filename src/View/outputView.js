import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../Constant/constants';

const OutputView = {
  async outputResult() {
    console.log(GAME.RESULT);
  },

  async outputBoard(name, count) {
    Console.print(`${name} : ${'-'.repeat(count)}`);
  },

  async outputWinner(winner) {
    Console.print(GAME.WINNER + String(winner.join(', ')));
  },
};

export default OutputView;

import { Random, Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

const UserInput = {
  async getRaceCarNames() {
    const raceCarNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    Validation.carNamesInput(raceCarNamesInput);

    return raceCarNamesInput;
  },

  async getRaceRoundCount() {
    const raceRoundCountInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    Validation.roundCountInput(raceRoundCountInput);

    return Number(raceRoundCountInput);
  },
};

export default UserInput;

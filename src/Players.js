import { Random } from '@woowacourse/mission-utils';

class Players {
  #names;
  #gameResult;

  constructor(names) {
    this.#names = names;
    this.#gameResult = [...this.#names].fill(0);
  }

  race() {
    this.#gameResult.forEach((player) => {
      if (Random.pickNumberInRange(0, 9) > 3) player = player + 1;
    });
  }

  print() {

  }
}

export default Players;
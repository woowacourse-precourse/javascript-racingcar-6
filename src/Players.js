import { Random, Console } from '@woowacourse/mission-utils';

class Players {
  #names;
  #scores;

  constructor(names) {
    this.#names = names;
    this.#scores = [...this.#names].map(() => 0);
  }

  race() {
    this.#scores.forEach((player) => {
      if (Random.pickNumberInRange(0, 9) > 3) player = player + 1;
    });
  }

  print() {
    this.#names.forEach((player, index) => {
      Console.print(`${player} : `);
      Array.from({ length: this.#scores[index] }).forEach(() => {
        Console.print('-');
      });
      Console.print('\n');
    });
    Console.print('\n');
  }
}

export default Players;
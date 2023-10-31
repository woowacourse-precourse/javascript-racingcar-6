import { Random, Console } from '@woowacourse/mission-utils';

class Players {
  #names;
  #scores;

  constructor(names) {
    this.#names = names;
    this.#scores = [...this.#names].map(() => 0);
  }

  race() {
    this.#scores = this.#scores.map((num, index) => {
      return (Random.pickNumberInRange(0, 9) > 3) ? num + 1 : num;
  });
  }

  print() {
    this.#names.forEach((player, index) => {
      const output = [];
      output.push(`${player} : `);
      Array.from({ length: this.#scores[index] }).forEach(() => {
        output.push('-');
      });
      Console.print(output);
    });
    Console.print();
  }
}

export default Players;
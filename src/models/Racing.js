import Converter from '../utils/Converter.js';
import RandomNumberGenerator from '../utils/RandomNumberGenerator.js';

class Racing {
  #carDistanceMap;

  #roundNumber;

  #status;

  #winner;

  constructor(carList, roundNumber) {
    this.#roundNumber = roundNumber;
    this.#status = '';
    this.#carDistanceMap = Converter.stringToMap(carList);
  }

  race() {
    let roundCount = 1;
    while (roundCount <= this.#roundNumber) {
      this.move(this.#carDistanceMap);
      this.#carDistanceMap.forEach((value, key) => {
        this.#status += `${key} : ${value}\n`;
      });
      roundCount += 1;
      if (roundCount <= this.#roundNumber) this.#status += '\n';
    }
    return this.#status;
  }

  move() {
    this.#carDistanceMap.forEach((value, key) => {
      const randomNumber = RandomNumberGenerator();
      if (randomNumber >= 4) {
        const beforeDash = this.#carDistanceMap.get(key);
        this.#carDistanceMap.set(key, `${beforeDash}-`);
      }
    });
  }

  findWinner() {
    const distanceCarMap = Converter.swapMap(this.#carDistanceMap);
    const winnerArr = [...distanceCarMap].sort((a, b) => b[0] - a[0])[0];
    this.#winner = winnerArr[1].join(', ');
    return this.#winner;
  }
}

export default Racing;

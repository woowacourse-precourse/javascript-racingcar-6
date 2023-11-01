import { SPACE } from '../constants/constants';

export default class WinnerModel {
  #winners;

  #completedRaceCars;

  constructor() {
    this.#winners = [];
  }

  makeWinner(completedRaceCars) {
    this.#completedRaceCars = completedRaceCars;
    const maxMove = Math.max(
      ...this.#completedRaceCars.map(({ moveCounts }) => moveCounts),
    );

    return this.#makeWinnerStringTemplate(maxMove);
  }

  #makeWinnerStringTemplate(maxMove) {
    this.#completedRaceCars.forEach(({ name, moveCounts }) => {
      if (moveCounts === maxMove) this.#winners.push(`${SPACE}${name}`);
    });

    return this.#winners.join(',');
  }
}

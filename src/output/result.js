import { Output } from '../interface/Output.js';
import { numberToHyphen } from '../utils.js';

export const printResult = {
  each(name, position) {
    Output(`${name} : ${numberToHyphen(position)}`);
  },

  final(winners) {
    let winnersString = '';

    winners.forEach((winner) => {
      winnersString += `${winner}, `;
    });

    winnersString.slice(0, -1);
    Output(`최종 우승자 : ${winnersString}`);
  },
};

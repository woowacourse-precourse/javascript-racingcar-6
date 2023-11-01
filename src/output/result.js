import { Output } from '../interface/Output.js';
import { numberToHyphen } from '../utils.js';

export const printResult = {
  each(name, position) {
    Output(`${name} : ${numberToHyphen(position)}`);
  },

  final(winners) {
    let winnersString = '';
    const divider = ', ';

    winners.forEach((winner, index) => {
      winnersString += `${winner}`;
      if (index !== winners.length - 1) {
        winnersString += divider;
      }
    });

    Output(`최종 우승자 : ${winnersString}`);
  },
};

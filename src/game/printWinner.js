import MESSAGE from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

const printResult = (finalRecord, lapLength) => {
  const winner = [];
  finalRecord.forEach((record) => {
    const countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
    const carName = record.split(' ');
    if (countLength === parseInt(lapLength, 10)) winner.push(carName[0]);
  });
  if (winner.length === 0) Console.print(MESSAGE.NO_WINNER);
  else Console.print(`${MESSAGE.FINAL_WINNER + winner.join(', ')}`);
};

export default printResult;

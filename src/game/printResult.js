import MESSAGE from '../utils/constants.js';
import computer from '../utils/console.js';

const printResult = (finalRecord, lapLength) => {
  const winner = [];
  finalRecord.forEach((record) => {
    const countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
    const carName = record.split(' ');
    if (countLength === parseInt(lapLength, 10)) winner.push(carName[0]);
  });
  if (winner.length === 0) computer.tell(MESSAGE.NO_WINNER);
  else computer.tell(`${MESSAGE.FINAL_WINNER + winner.join(', ')}`);
};

export default printResult;

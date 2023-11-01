import { printWinner } from '../utils/Output.js';

const selectWinner = (carsPosition) => {
  const nonZeroPositions = Object.values(carsPosition).filter(
    (position) => position !== 0
  );
  if (nonZeroPositions.length === 0) {
    printWinner([]);
    return;
  }

  let maxPosition = Math.max(...nonZeroPositions);
  let winner = Object.keys(carsPosition).filter(
    (car) => carsPosition[car] === maxPosition
  );

  printWinner(winner);
};

export default selectWinner;

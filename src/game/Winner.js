import { printWinner } from '../utils/Output.js';

const selectWinner = (carsPosition) => {
  let maxPosition = Math.max(...Object.values(carsPosition));
  let winner = Object.keys(carsPosition).filter(
    (car) => carsPosition[car] === maxPosition
  );

  printWinner(winner);
};

export default selectWinner;

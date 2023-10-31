import { printWinner } from '../utils/Output.js';

// 우승자 선정하기
const selectWinner = (carsPosition) => {
  let maxPosition = Math.max(...Object.values(carsPosition));
  let winner = Object.keys(carsPosition).filter(
    (car) => carsPosition[car] === maxPosition
  );

  printWinner(winner);
};

export default selectWinner;

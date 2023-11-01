import { Console } from '@woowacourse/mission-utils';
import { FINAL_WINNER, WINNER_JOINING_MARK } from '../Constants.js';

export const chooseWinnerInArray = (carDataList) => {
  let winnerArray = [];
  let maxDistance = -1;
  carDataList.forEach((carDataObj) => {
    if (carDataObj.distance > maxDistance) {
      winnerArray = [carDataObj.name];
      maxDistance = carDataObj.distance;
      return;
    }
    if (carDataObj.distance === maxDistance) {
      winnerArray.push(carDataObj.name);
    }
  });

  return winnerArray;
};

const announceWinner = (carDataList) => {
  const winnerArray = chooseWinnerInArray(carDataList);

  const winnerStr = winnerArray.join(WINNER_JOINING_MARK);
  Console.print(`${FINAL_WINNER} : ${winnerStr}`);
};
export default announceWinner;

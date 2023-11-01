import { Console } from '@woowacourse/mission-utils';

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

  const winnerStr = winnerArray.join(', ');
  Console.print(`최종 우승자 : ${winnerStr}`);
};
export default announceWinner;

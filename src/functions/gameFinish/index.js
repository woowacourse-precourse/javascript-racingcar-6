import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

export const checkDistanceResult = carDistanceList => {
  let winnerList = [];

  carDistanceList.reduce((maxDistance, currentCar) => {
    if (maxDistance < currentCar.distance.length) {
      winnerList = [currentCar.carName];
      return currentCar.distance.length;
    }

    if (maxDistance === currentCar.distance.length) {
      winnerList.push(currentCar.carName);
    }
    return maxDistance;
  }, 0);

  return winnerList;
};

export const printWinner = winnerList => {
  let winnerMessage = `${MESSAGE.printWinner}`;

  winnerList.forEach((winner, index) => {
    if (index === 0) {
      winnerMessage += winner;
    } else {
      winnerMessage += `, ${winner}`;
    }
  });

  Console.print(winnerMessage);
};

import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

const getCanMove = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber < 4) return false;
  return true;
};

const playOneRound = carDistanceList => {
  carDistanceList.forEach(car => {
    if (getCanMove) {
      const updateCar = car;
      updateCar.distance += '-';
      return updateCar;
    }

    return car;
  });
};

const printRoundResult = carDistanceList => {
  carDistanceList.forEach(car => {
    Console.print(`${car.carName} : ${car.distance}`);
  });
};

export const printResultMessage = () => {
  Console.print(MESSAGE.printResult);
};

export const playRounds = (carDistanceList, playNum) => {
  for (let round = 0; round < playNum; round += 1) {
    playOneRound(carDistanceList);
    printRoundResult(carDistanceList);
  }
};

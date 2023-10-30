import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

const getCanMove = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber < 4) return false;
  return true;
};

export const playOneRound = carDistanceList => {
  carDistanceList.forEach(car => {
    if (getCanMove) {
      const updateCar = car;
      updateCar.distance += '-';
      return updateCar;
    }
    return car;
  });
};

export const printRoundResult = carDistanceList => {
  carDistanceList.forEach(car => {
    Console.print(`${car.carName} : ${car.distance}`);
  });
};

export const printResultMessage = () => {
  Console.print(MESSAGE.printResult);
};

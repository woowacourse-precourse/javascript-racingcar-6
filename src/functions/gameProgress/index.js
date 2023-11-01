import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

const getCanMove = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber < 4) return false;
  return true;
};

const playOneRound = racingResult => {
  racingResult.forEach(car => {
    if (getCanMove) {
      const updateCar = car;
      updateCar.distance += '-';
      return updateCar;
    }

    return car;
  });
};

const printRoundResult = racingResult => {
  racingResult.forEach(car => {
    Console.print(`${car.carName} : ${car.distance}`);
  });
};

export const printResultMessage = () => {
  Console.print(MESSAGE.printResult);
};

export const playRounds = (racingResult, playCount) => {
  for (let round = 0; round < playCount; round += 1) {
    playOneRound(racingResult);
    printRoundResult(racingResult);
  }
};

import { random } from './randomNumber';
import { racingOutput, printWinningMessage } from '../view/outputView';
import { OUTPUT_MESSAGE } from '../constants/ErrorMessage';

export const moveCount = (cars, round) => {
  racingOutput(OUTPUT_MESSAGE.RACING_RESULT);

  const carNames = Object.keys(cars);
  carNames.forEach((carName) => {
    cars[carName] = '';
  });

  for (let roundIndex = 0; roundIndex < round; roundIndex++) {
    const carObject = runRace(cars);
    racingOutput(carObject);
  }
};

export const runRace = (cars) => {
  const carNames = Object.keys(cars);
  const randomNumbers = random(carNames.length);

  carNames.forEach((carName, index) => {
    cars[carName] += randomNumbers[index] >= 4 ? '-' : '';
  });

  roundWinner(cars);
  return cars;
};

const roundWinner = (cars) => {
  let maxDistance = -1;
  let winner = '';

  Object.entries(cars).forEach(([carName, distance], index) => {
    const dashCount = distance.length;
    if (dashCount > maxDistance) {
      maxDistance = dashCount;
      winner = carName;
    }
  });
  printWinningMessage(winner);
};

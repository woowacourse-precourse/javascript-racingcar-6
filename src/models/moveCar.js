import { random } from './randomNumber.js';
import { racingOutput } from '../view/outputView.js';
import { OUTPUT_MESSAGE } from '../constants/ErrorMessage.js';

//입력받은 시도횟수에 따라 반복
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

//랜덤수에 따라 전진 상태를 결정
export const runRace = (cars) => {
  const carNames = Object.keys(cars);
  const randomNumbers = random(carNames.length);

  carNames.forEach((carName, index) => {
    cars[carName] += randomNumbers[index] >= 4 ? '-' : '';
  });

  return cars;
};

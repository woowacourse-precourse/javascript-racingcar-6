import {
  CARNAME_REQUEST_MESSAGE,
  COUNT_REQUEST_MESSAGE,
  EACH_ROUND_RESULT,
  FINAL_RESULT,
} from '../Utils/Define';
import InputView from './InputView';
import { validatorCarName, validatorGameRound } from '../Utils/Validator';
import OutputView from './OutputView';

const userInput = async () => {
  const carNamesInput = await InputView(CARNAME_REQUEST_MESSAGE);
  const carNames = carNamesInput.split(',');
  carNames.forEach((carName) => {
    validatorCarName(carName);
  });

  const gameRound = await InputView(COUNT_REQUEST_MESSAGE);
  validatorGameRound(gameRound);
  return [carNames, gameRound];
};

const eachResultOutput = (cars) => {
  let result = '';
  cars.forEach((car) => {
    const distanceInDashes = '-'.repeat(car.distance);
    result += `${car.name} : ${distanceInDashes}\n`;
  });
  OutputView(EACH_ROUND_RESULT, result);
};

const finalResult = (cars) => {
  let maxDistance = 0;
  let winners = [];

  cars.forEach((car) => {
    if (car.distance > maxDistance) {
      maxDistance = car.distance;
      winners = [car.name];
    } else if (car.distance === maxDistance) {
      winners.push(car.name);
    }
  });
  const winnersString = winners.join(', ');
  OutputView(FINAL_RESULT, winnersString);
};

export { userInput, eachResultOutput, finalResult };

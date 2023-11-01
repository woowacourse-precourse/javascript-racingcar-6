import { Random } from '@woowacourse/mission-utils';
import { NUMBER_MAX, NUMBER_MIN, MOVE_FORWARD } from '../Utils/Define';
import Car from './Car';
import { userInput, eachResultOutput, finalResult } from '../view/View';

const createRandomNumber = () => {
  const RandomNumber = Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX);
  return RandomNumber;
};

const canMoveForward = (randomNumber) => {
  if (randomNumber >= MOVE_FORWARD) {
    return true;
  }
  return false;
};

export const initCars = (carNames) => {
  const cars = carNames.map((name) => new Car(name, 0));
  return cars;
};

export const moveCars = (cars) => {
  cars.forEach((car) => {
    const randomNumber = createRandomNumber();
    if (canMoveForward(randomNumber)) {
      car.moveForward();
    }
  });
};

export const printResults = async (cars, roundCount, gameRound) => {
  if (roundCount < gameRound) {
    return eachResultOutput(cars);
  }
  return finalResult(cars);
};

export const startGame = async () => {
  const [carsNames, gameRound] = await userInput();
  const cars = await initCars(carsNames);

  const printPromises = [];

  for (let roundCount = 0; roundCount <= gameRound; roundCount += 1) {
    moveCars(cars);
    printPromises.push(printResults(cars, roundCount, gameRound));
  }

  await Promise.all(printPromises);

  return cars;
};

export default { startGame };

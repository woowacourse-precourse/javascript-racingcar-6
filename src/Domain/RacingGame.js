import { Random } from '@woowacourse/mission-utils';
import { NUMBER_MAX, NUMBER_MIN, MOVE_FORWARD } from '../Utils/Define';
import Car from './Car';
import userInput from '../view/View';

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

const initCars = (carNames) => {
  const cars = carNames.map((name) => new Car(name, 0));
  return cars;
};

const playOneRound = async (cars) => {
  cars.forEach((car) => {
    const randomNumber = createRandomNumber();
    if (canMoveForward(randomNumber)) {
      car.moveForward();
    }
  });
  return cars;
};

export const startGame = async () => {
  const [carsNames, gameRound] = await userInput();
  const cars = await initCars(carsNames);
  const carsAfterRound = await playOneRound(cars);
  return carsAfterRound;
};

export default { startGame };

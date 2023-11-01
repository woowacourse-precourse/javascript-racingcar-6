import { Random } from '@woowacourse/mission-utils';
import { NUMBER_MAX, NUMBER_MIN, MOVE_FORWARD } from '../Utils/Define';
import { userInput, eachResultOutput, finalResult } from '../view/View';
import Car from './Car';

const createRandomNumber = () => {
  const RandomNumber = Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX);
  return RandomNumber;
};

const canMoveForward = (randomNumber) => randomNumber >= MOVE_FORWARD;

const initCars = (carNames) => {
  const cars = carNames.map((name) => new Car(name, 0));
  return cars;
};

const moveCars = (cars) => {
  cars.forEach((car) => {
    const randomNumber = createRandomNumber();
    if (canMoveForward(randomNumber)) {
      car.moveForward();
    }
  });
};

const printResults = async (cars, roundCount, gameRound) =>
  roundCount < gameRound ? eachResultOutput(cars) : finalResult(cars);

const playRound = (cars, roundCount, gameRound, printPromises) => {
  moveCars(cars);
  printPromises.push(printResults(cars, roundCount, gameRound));
};

const startGame = async () => {
  const [carNamesInput, gameRound] = await userInput();
  const cars = await initCars(carNamesInput);
  const printPromises = [];

  for (let roundCount = 0; roundCount <= gameRound; roundCount += 1) {
    playRound(cars, roundCount, gameRound, printPromises);
  }

  await Promise.all(printPromises);

  return cars;
};

export default { startGame };

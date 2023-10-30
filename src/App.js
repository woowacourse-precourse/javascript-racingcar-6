import { Console, Random } from '@woowacourse/mission-utils';
import { validName, validTryCount } from './Validation.js';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from './constants/Message.js';
import { NUMBER } from './constants/ConstantNumber.js';

class App {
  async play() {
    const carObjects = await getCarName();
    const tryCount = await getTryCount();
    for (let i = 0; i < tryCount; i++) {
      await moveCar(carObjects);
      printCarPosition(carObjects);
    }
    printWinner(carObjects);
  }
}

export default App;

async function getCarName() {
  const carName = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
  validName(carName);
  const carNames = carName.split(',').map((name) => name.trim());
  const carObjects = carNames.map((name) => ({
    name,
    position: NUMBER.START_POSITION,
  }));
  return carObjects;
}

async function getTryCount() {
  const tryCount = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
  validTryCount(tryCount);
  return parseInt(tryCount);
}

async function getRandomNumber() {
  const randomNumber = await Random.pickNumberInRange(
    NUMBER.PICK_NUMBER_MIN,
    NUMBER.PICK_NUMBER_MAX
  );
  return randomNumber;
}

async function moveCar(carObjects) {
  for (const carObject of carObjects) {
    const randomNumber = await getRandomNumber();
    if (randomNumber >= NUMBER.FOWARD_CONDITION) {
      carObject.position += 1;
    }
  }
  return carObjects;
}

function printCarPosition(carObjects) {
  for (const carObject of carObjects) {
    Console.print(`${carObject.name} : ${'-'.repeat(carObject.position)}`);
  }
  Console.print('');
}

function printWinner(carObjects) {
  const winnerPosition = Math.max(
    ...carObjects.map((carObject) => carObject.position)
  );
  const winners = carObjects
    .filter((carObject) => carObject.position === winnerPosition)
    .map((carObject) => carObject.name);
  Console.print(`${OUTPUT_MESSAGE.WINNER}${winners.join(', ')}`);
}

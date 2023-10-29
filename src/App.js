import { Console, Random } from '@woowacourse/mission-utils';

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
  const carName = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  validName(carName);
  const carNames = carName.split(',').map((name) => name.trim());
  const carObjects = carNames.map((name) => ({ name, position: 0 }));
  return carObjects;
}

async function getTryCount() {
  const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  return parseInt(tryCount);
}

async function getRandomNumber() {
  const randomNumber = await Random.pickNumberInRange(0, 9);
  return randomNumber;
}

async function moveCar(carObjects) {
  for (const carObject of carObjects) {
    const randomNumber = await getRandomNumber();
    if (randomNumber >= 4) {
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
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}

function validName(name) {
  if (name === '') {
    throw new Error('[ERROR] 이름을 입력해주세요.');
  }
  const carNames = name.split(',').map((name) => name.trim());
  for (const carName of carNames) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5글자를 초과할 수 없습니다.');
    }
  }
}

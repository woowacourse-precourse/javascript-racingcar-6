import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    await getCarName();
    await getTryCount();
  }
}

export default App;

async function getCarName() {
  const carName = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const carNames = carName.split(',').map((name) => name.trim());
  const carObject = carNames.map((name) => ({ name, position: 0 }));
  return carObject;
}

async function getTryCount() {
  const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  console.log(tryCount);
  return tryCount;
}

async function getRandomNumber() {
  const randomNumber = await Random.pickNumberInRange(0, 9);
  return randomNumber;
}

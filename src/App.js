import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    getCarName();
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

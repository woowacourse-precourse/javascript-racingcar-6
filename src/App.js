import { MissionUtils } from '@woowacourse/mission-utils';
import { nameError, numberError } from './gameError.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  carGetDisplay() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}

class App {
  async play() {
    await gameStart();
  }
}

const gameStart = async () => {
  try {
    const carName = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ); //배열
    nameError(carName.split(','));

    const gameAttempt = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    numberError(gameAttempt); //문자열
  } catch (error) {
    throw error;
  }
};

export default App;

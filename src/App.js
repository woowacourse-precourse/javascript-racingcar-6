import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  goForward() {
    let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  showPosition() {
    let dashPosition = '-'.repeat(this.position);
    Console.print(`${this.name} : ${dashPosition}`);
  }
}

function createCarArray(carNameArr) {
  let carArr = [];
  carNameArr.forEach((element) => {
    carArr.push(new Car(element));
  });
  return carArr;
}

function isCarNameValid(carNameArr) {
  const carNameSet = new Set(carNameArr);
  const carNameCount = carNameArr.length;

  if (carNameArr.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }
  if (carNameArr.some((name) => name.length < 1)) {
    throw new Error('[ERROR] 자동차 이름은 1자 이상이여야 합니다.');
  }
  if (carNameCount < 2) {
    throw new Error('[ERROR] 자동차는 2대 이상이여야 합니다.');
  }
  if (carNameSet.size !== carNameCount) {
    throw new Error('[ERROR] 자동차 이름은 중복되지 않아야 합니다.');
  }
}

function isRoundCountValid(roundCount) {
  if (isNaN(roundCount)) {
    throw new Error('[ERROR] 시도횟수는 숫자만 입력하세요.');
  }
  if (roundCount < 0) {
    throw new Error('[ERROR] 0 이상의 숫자를 입력하세요.');
  }
  if (roundCount % 1 !== 0) {
    throw new Error('[ERROR] 정수를 입력하세요.');
  }
}

function getWinner(carArr) {
  let winners = [];
  let winnerPosition = 0;
  carArr.forEach((car) => {
    if (winnerPosition < car.position) {
      winnerPosition = car.position;
      winners = [car.name];
    } else if (winnerPosition === car.position) {
      winners.push(car.name);
    }
  });
  return winners;
}

class App {
  async play() {
    let carNameArr = await this.getCarName();
    isCarNameValid(carNameArr);

    let roundCount = await this.getRoundCount();
    isRoundCountValid(roundCount);

    let carArr = createCarArray(carNameArr);

    Console.print('\n실행 결과');
    this.runRace(carArr, roundCount);
    let winners = getWinner(carArr);
    Console.print(`최종 우승자 : ${winners}`);
  }

  oneRound(carArr) {
    carArr.forEach((car) => {
      car.goForward();
      car.showPosition();
    });
  }

  runRace(carArr, roundCount) {
    for (let i = 0; i < roundCount; i++) {
      this.oneRound(carArr);
      Console.print('\n');
    }
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNameArr = carNames.split(',');
    return carNameArr;
  }

  async getRoundCount() {
    const roundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return roundCount;
  }
}

export default App;

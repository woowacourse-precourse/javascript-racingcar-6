import { Console } from '@woowacourse/mission-utils';

class App {    
  constructor() {
    this.cars = [];
  }

  async play() {
    await this.initializeCars();
    const rounds = await this.getRounds();
    this.validateRounds(rounds);
    this.playRounds(rounds);
    this.determineWinners();
  }
  
  async initializeCars() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차이름을입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = this.parseCarNamesInput(carNamesInput);
    this.validateCarNames(carNames);
    this.cars = this.createCars(carNames);
  }

  parseCarNamesInput(input) {
    return input.trim().split(',').map((name) => name.trim());
  }

  validateCarNames(names) {
    if (names.length === 0) {
      throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
    }
    if (new Set(names).size !== names.length) {
      throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
    }
    names.forEach((name) => {
      if (name.length === 0) {
        throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
      }
      if (name.length > 5) {
        throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
      }
    });
    return true;
  }

  createCars(names) {
    return names.map((name) => ({ name: name, moveCount: 0 }));
  }

  async getRounds() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');  
  }

  validateRounds(rounds) {
    if (!rounds || isNaN(rounds) || rounds <= 0) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  playRounds(rounds) {
    Console.print(`\n실행 결과`);
    for (let i = 0; i < rounds; i++) {
      this.playRound();
    }
  }

  playRound() {
    this.moveCarsRandomly();
    this.printRoundResult();
  }

  moveCarsRandomly() {
    this.cars.forEach((car) => {
      if (this.isMovable()) {
        car.moveCount += 1;
      }
    });
  }

  isMovable() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  } 

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(this.generateCarResultString(car));
    });
    Console.print('');
  }

  generateCarResultString(car) {
    return `${car.name} : ${'-'.repeat(car.moveCount)}`;
  }

  determineWinners() {
    const sortedCars = this.sortMoveCount();
    const maxMoveCount = sortedCars[0].moveCount;
    const winners = this.findWinners(sortedCars, maxMoveCount);
    const winnerNames = this.extractWinnerNames(winners);
    Console.print(this.generateWinnerResultString(winnerNames));
  }

  sortMoveCount() {
    return [...this.cars].sort((a, b) => b.moveCount - a.moveCount);
  }

  findWinners(cars, maxMoveCount) {
    return cars.filter((car) => car.moveCount === maxMoveCount);
  }

  extractWinnerNames(winners) {
    return winners.map((winner) => winner.name);
  }

  generateWinnerResultString(winners) {
    return `최종 우승자 : ${winners.join(', ')}`;
  }
}

export default App;

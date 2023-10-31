import { Console } from '@woowacourse/mission-utils';

class App {    
  constructor() {
    this.cars = [];
  }

  async play() {
    await this.initializeCars();
    const rounds = await this.getRounds();
    this.playRounds(rounds);
  }
  
  async initializeCars() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차이름을입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = this.parseCarNamesInput(carNamesInput);
    this.cars = this.createCars(carNames);
  }

  parseCarNamesInput(input) {
    return input.trim().split(',').map((name) => name.trim());
  }

  createCars(names) {
    return names.map((name) => ({ name: name, moveCount: 0 }));
  }

  async getRounds() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');  
  }

  playRounds(rounds) {
    Console.print(`\n실행 결과`);
    for (let i = 0; i < rounds; i++) {
      this.cars.forEach((car) => {
        if (this.isMovable()) {
          car.moveCount += 1;
        }
      });
      this.cars.forEach((car) => {
        Console.print(`${car.name} : ${'-'.repeat(car.moveCount)}`);
      });
      Console.print('');
    }
  }  

  isMovable() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  } 
}

export default App;

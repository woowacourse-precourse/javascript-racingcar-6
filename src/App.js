const { MissionUtils,Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    try {
      const carNamesInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const attemptsInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      
      const attempts = parseInt(attemptsInput, 10);

      if (!carNamesInput || !carNamesInput.includes(',') || attempts <= 0 || isNaN(attempts)) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      }

      const carNames = carNamesInput.split(',').map(name => name.trim());

      if (!Array.isArray(carNames) || carNames.some(name => typeof name !== 'string')) {
        throw new Error('[ERROR] 자동차 이름을 올바르게 입력해주세요.');
      }

      if (carNames.some(name => name.length > 5)) {
        throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');
      }

      await this.raceCars(carNames, attempts);
    } catch (error) {
      MissionUtils.Console.print(error.message + '\n');
      throw new Error(error.message);
    }
  }

  async raceCars(carNames, attempts) {
    const movements = [];
    for (let i = 0; i < attempts; i++) {
      const cars = [];
      for (const carName of carNames) {
        const movement = await this.calculateMovement();
        cars.push({ name: carName, movement });
      }
      movements.push(cars);
    }
    this.displayMovements(movements);
  }
  
  async calculateMovement() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? 1 : 0;
  }

  async displayMovements(movements) {
    movements.forEach(round => {
      round.forEach(car => {
        const { name, movement } = car;
        const progress = '-'.repeat(movement);
        MissionUtils.Console.print(`${name} : ${progress}\n`);
      });
      MissionUtils.Console.print('\n');
    });
  }  
  async displayWinners(allMovements) {
    const maxProgress = Math.max(...allMovements.map(movement => movement.movement));
    const winners = allMovements
      .filter(movement => movement.movement === maxProgress)
      .map(winner => winner.name)
      .join(', ');
  
    MissionUtils.Console.print(`최종 우승자: ${winners}\n`);
  }
  }

export default App;
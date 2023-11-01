import readline from 'readline';

const MissionUtils = {
  Random: {
    pickNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  toString() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}

class RacingGame {
  constructor(carNames, tries) {
    this.cars = carNames.split(',').map(name => new Car(name));
    this.tries = tries;
  }

  playGame() {
    for (let i = 0; i < this.tries; i++) {
      this.cars.forEach(car => car.move());
      console.log(this.cars.map(car => car.toString()).join('\n'));
      if (i < this.tries - 1) {
        console.log('');
      }
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name)
      .join(', ');
  }
}

function readLineAsync(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

class App {
  async play() {
    try {
      const carNames = await readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const names = carNames.split(',');

      if (names.some(name => name.trim().length > 5)) {
        throw new Error('[ERROR] 자동차 이름은 5글자 이하만 가능합니다.');
      }

      if (hasDuplicateNames(names)) {
        throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
      }

      const tries = await readLineAsync('시도할 횟수는 몇 회인가요?\n');

      const racingGame = new RacingGame(carNames, parseInt(tries, 10));
      console.log('실행 결과:');
      racingGame.playGame();
      const winners = racingGame.getWinners();
      console.log('최종 우승자: ' + winners);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

function hasDuplicateNames(names) {
  const uniqueNames = new Set(names);
  return names.length !== uniqueNames.size;
}

export default App;

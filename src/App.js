const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  async play() {
    try {
      const CAR_NAMES = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ');
      if (!/^[\w,]{1,25}$/.test(CAR_NAMES)) {
        throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
      }

      const NUM_MOVES = await Console.readLineAsync('Enter the number of moves: ');
      if (!/^\d+$/.test(NUM_MOVES)) {
        throw new Error('[ERROR] 이동횟수가 잘못된 형식입니다.');
      }

      this.startRace(CAR_NAMES, parseInt(NUM_MOVES));
    } catch (error) {
      await Console.printAsync(error.message + '\n');
    }
  }

  async startRace(carNames, numMoves) {
    const CARS = carNames.split(',').map(name => ({ name, position: 0 }));

    async function race() {
      for (let MOVE = 0; MOVE < numMoves; MOVE++) {
        await Console.printAsync('\nRace ' + (MOVE + 1) + ':\n');

        for (const CAR of CARS) {
          const distance = Random.pickNumberInRange(0, 9);
          if (distance >= 4) {
            CAR.position += 1;
          }

          let track = '';
          for (let i = 0; i < CAR.position; i++) {
            track += '-';
          }
          await Console.printAsync(`${CAR.name}: ${track}\n`);
        }
        
        await sleep(1000);
      }
    }

    race();

    setTimeout(async () => {
      const MAX_POSITION = Math.max(...CARS.map(CAR => CAR.position));
      const WINNERS = CARS.filter(CAR => CAR.position === MAX_POSITION);

      if (WINNERS.length === 1) {
        await Console.printAsync('최종 우승자 : ' + WINNERS[0].name + '\n');
      } else {
        await Console.printAsync('최종 우승자 : ' + WINNERS.map(WINNER => WINNER.name).join(', ') + '\n');
      }
      // No process.exit() here
    }, numMoves * 1000);
  }
}

module.exports = App;

// Define the sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize the application
const app = new App();
app.play();

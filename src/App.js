import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { validateCarNames, validateRoundCount } from './utils.js';
import { MOVE_REQUIREMENT } from './constants.js';

class App {
  async play() {
    const carNames = await this.getCarNames();
    const rounds = await this.getNumberOfRounds();
    const players = this.createPlayers(carNames);

    MissionUtils.Console.print('\n실행 결과');

    this.playGame(players, rounds);
    const winner = this.getWinner(players);

    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = validateCarNames(input);
    return carNames;
  }

  async getNumberOfRounds() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const rounds = validateRoundCount(input);
    return rounds;
  }

  createPlayers(carNames) {
    const players = [];
    for (let i = 0; i < carNames.length; i += 1) {
      const newPlayer = new Car(carNames[i]);
      players.push(newPlayer);
    }
    return players;
  }

  playGame(players, rounds) {
    for (let i = 0; i < rounds; i += 1) {
      this.movePlayers(players);
      this.printRoundResults(players);
    }
  }

  movePlayers(players) {
    for (let i = 0; i < players.length; i += 1) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= MOVE_REQUIREMENT) players[i].moveForward();
    }
  }

  printRoundResults(players) {
    for (let i = 0; i < players.length; i += 1) {
      const playerProgress = players[i].printMoves();
      const text = `${players[i].name} : ${playerProgress}`;
      MissionUtils.Console.print(text);
    }
    MissionUtils.Console.print('');
  }

  getWinner(players) {
    const highestScore = players.reduce((max, cur) => {
      if (cur.moves > max) return cur.moves;
      return max;
    }, 0);

    const winners = [];

    for (let i = 0; i < players.length; i += 1) {
      if (players[i].moves === highestScore) winners.push(players[i].name);
    }

    return winners.join(', ');
  }
}

export default App;

import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const carNames = await this.getCarNames();
    const playRounds = await this.getNumberOfRounds();

    const players = this.createPlayers(carNames);

    MissionUtils.Console.print('\n실행 결과');

    this.playGame(players, playRounds);

    const winner = this.getWinner(players);

    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = this.validateCarNames(input);
    return carNames;
  }

  async getNumberOfRounds() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const rounds = this.validateRoundCount(input);
    return rounds;
  }

  validateCarNames(input) {
    this.checkNameFormat(input);

    const carNames = input.split(',');

    if (carNames.includes('')) throw new Error('[ERROR] 자동차는 이름이 있어야 합니다.');
    carNames.forEach(this.checkNameLength);

    return carNames;
  }

  validateRoundCount(input) {
    if (!Number(input)) throw new Error('[ERROR] 숫자가 아닙니다.');
    if (!Number.isInteger(Number(input))) throw new Error('[ERROR] 정수가 아닙니다.');
    return Number(input);
  }

  checkNameFormat(string) {
    if (!string.includes(',')) throw new Error('[ERROR] 이름 형식이 맞지 않습니다.');
  }

  checkNameLength(name) {
    if (name.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }

  createPlayers(carNames) {
    let players = [];
    for (let i = 0; i < carNames.length; i++) {
      const newPlayer = new Car(carNames[i]);
      players.push(newPlayer);
    }
    return players;
  }

  playGame(players, rounds) {
    for (let i = 0; i < rounds; i++) {
      this.getPlayerMoves(players);
      this.printRoundResults(players);
    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  canMove(number) {
    if (number < 4) return false;
    return true;
  }

  getPlayerMoves(players) {
    for (let i = 0; i < players.length; i++) {
      const randomNumber = this.getRandomNumber();
      const canMove = this.canMove(randomNumber);

      if (canMove) players[i].moves += 1;
    }
  }

  printRoundResults(players) {
    for (let i = 0; i < players.length; i++) {
      const playerProgress = players[i].printMoves();
      const text = `${players[i].name} : ${playerProgress}`;
      MissionUtils.Console.print(text);
    }
    MissionUtils.Console.print('');
  }

  getWinner(players) {
    const highestScore = players.reduce((max, cur, i) => {
      if (cur.moves > max) return cur.moves;
      return max;
    }, 0);

    let winners = [];

    for (let i = 0; i < players.length; i++) {
      if (players[i].moves === highestScore) winners.push(players[i].name);
    }

    return winners.join(', ');
  }
}

export default App;

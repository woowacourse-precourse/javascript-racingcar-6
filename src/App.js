import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } from './Message';
class App {
  async play() {
    try {
      let players = await this.userInput(1);
      this.validateInputPlayers(players);
      players = players = players.split(',');
      const games = await this.userInput(2);
      this.validateGames(games);
      this.startGame(players, games);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  userInput(type) {
    let input;
    if (type === 1) {
      input = Console.readLineAsync(INPUT_MESSAGE.PLAYERS);
    } else if (type === 2) {
      input = Console.readLineAsync(INPUT_MESSAGE.GAMES);
    }
    return input;
  }
  validateInputPlayers(input) {
    const players = input.split(',');
    if (players.length < 2) {
      this.ExceptionOccurred('number_of_players');
    }
    players.map((player) => this.validatePlayer(player));
    return players;
  }
  validatePlayer(player) {
    console.log(player);
    if (player.trim() === '') {
      this.ExceptionOccurred('common');
    }
    if (player.length > 5) {
      this.ExceptionOccurred('length');
    }
  }
  validateGames(input) {
    if (isNaN(input)) {
      this.ExceptionOccurred('type');
    }
    if (Number(input) < 1) {
      this.ExceptionOccurred('number_of_games');
    }
  }
  ExceptionOccurred(type) {
    if (type === 'common') {
      throw new Error(ERROR_MESSAGE.COMMON);
    } else if (type === 'length') {
      throw new Error(ERROR_MESSAGE.LENGTH);
    } else if (type === 'type') {
      throw new Error(ERROR_MESSAGE.TYPE);
    } else if ((type = 'number_of_players')) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_PLAYERS);
    } else if ((type = 'number_of_games')) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_GAMES);
    }
  }
  startGame(players, games) {
    let playersMove = new Array(players.length);
    playersMove.fill(0);
    Console.print(RESULT_MESSAGE.ROUND);
    for (let i = 0; i < Number(games); i++) {
      playersMove = this.moveOrWait(players, playersMove);
      this.printRound(players, playersMove);
      Console.print(' ');
    }
    const winner = this.printWinner(players, playersMove);
    Console.print(RESULT_MESSAGE.WINNERS + winner.join(', '));
  }
  moveOrWait(players, playersMove) {
    for (let i = 0; i < players.length; i++) {
      if (this.createRandomNumber() >= 4) playersMove[i]++;
    }
    return playersMove;
  }
  createRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
  printRound(players, playersMove) {
    for (let i = 0; i < players.length; i++) {
      const moveBar = this.createBar(playersMove[i]);
      Console.print(players[i] + ' : ' + moveBar);
    }
  }
  createBar(playersMove) {
    let bar = '';
    for (let i = 0; i < playersMove; i++) {
      bar += '-';
    }
    return bar;
  }
  printWinner(players, playersMove) {
    const maxMove = Math.max(...playersMove);
    // console.log(maxMove);
    let winner = [];
    for (let i = 0; i < players.length; i++) {
      if (playersMove[i] === maxMove) winner.push(players[i]);
    }
    return winner;
  }
}
const app = new App();
app.play();
export default App;

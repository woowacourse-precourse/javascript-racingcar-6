import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    try {
      const players = await this.userInput(1);
      this.validateInputPlayers(players);
      const games = await this.userInput(2);
      this.validateGames(games);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  userInput(type) {
    let input;
    if (type === 1) {
      input = Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
    } else if (type === 2) {
      input = Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    }
    return input;
  }
  validateInputPlayers(input) {
    const players = input.split(',');
    if (players.length < 2) {
      throw new Error('플레이어는 1명 이상입력해주세요');
    }
    players.map((player) => this.validatePlayer(player));
    console.log('올바른 입력입니다.');
  }
  validatePlayer(player) {
    console.log(player);
    if (player.trim() === '') {
      this.Exceptionoccurred();
    }
    if (player.length > 5) {
      this.Exceptionoccurred();
    }
  }
  validateGames(input) {
    if (isNaN(input)) {
      this.Exceptionoccurred();
    }
  }
  Exceptionoccurred() {
    throw new Error('[ERROR] 잘못된 입력입니다.');
  }
}
const app = new App();
app.play();
export default App;

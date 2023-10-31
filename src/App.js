import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    try {
      const input = await this.inputPlayers();
      this.validateInputPlayers(input);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  inputPlayers() {
    const input = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
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
      throw new Error('잘못된 입력입니다.');
    }
    if (player.length > 5) {
      throw new Error('잘못된 입력입니다.');
    }
  }
}
const app = new App();
app.play();
export default App;

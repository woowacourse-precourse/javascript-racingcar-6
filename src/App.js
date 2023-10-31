import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const input = await this.inputPlayer();
    console.log(input);
  }
  inputPlayer() {
    const input = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    return input;
  }
}
const app = new App();
app.play();
export default App;

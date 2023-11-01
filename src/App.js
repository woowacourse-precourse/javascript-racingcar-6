import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async receiveCarNames() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');
    return carNames;
  }

  async play() {
    this.receiveCarNames();
  }
}

const app = new App();
app.play();

export default App;

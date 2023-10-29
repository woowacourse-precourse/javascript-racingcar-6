import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #cars;
  #times;
  #num;

  constructor() {
    this.#cars = [];
    this.#times = 0;
    this.#num = 0;
  }

  async getCarNames() {
    const names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!names) {
      throw new Error('[ERROR] 자동차 이름을 입력해 주세요');
    }

    names.split(',').forEach((element) => {
      if (element.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하여야 합니다');
      }
      this.#cars.push({ name: element, count: 0 });
    });
  }

  async play() {
    this.getCarNames();
  }
}

const app = new App();
app.play();

export default App;

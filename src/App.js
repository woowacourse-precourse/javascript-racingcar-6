import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 경주할 자동차 이름 입력
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    // 시도 횟수 입력
    const counts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    Console.print(cars)
    Console.print(counts)
  }
};

const app = new App();
app.play();

export default App;

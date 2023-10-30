import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    start();

  }
}

async function start() {
  Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const inputCarName = await Console.readLineAsync("");
  const carName = inputCarName.split(',');
  Console.print("시도할 횟수는 몇 회인가요?");
  const inputNumber = await Console.readLineAsync("");
}


export default App;

const app = new App();
app.play();
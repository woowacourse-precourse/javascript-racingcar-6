import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const cars = await Console.readLineAsync('');
    const users = cars.split(',');
    await Console.print(cars);
    await Console.print(users);
    await Console.print("시도할 횟수는 몇 회인가요?");
    const numberOfAttempts = await Console.readLineAsync('');
    await Console.print(`시도 횟수 : ${numberOfAttempts}`); 
  }
}

// const status = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

export default App;

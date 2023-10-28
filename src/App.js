import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const [carsName, gamesNum] = await this.receiveUserInput();
    const cars = this.seperateNames(carsName);
  }

  async receiveUserInput() {
    const carsName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const gamesNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return [carsName, gamesNum];
  }

  seperateNames(names) {
    // 이름에 대한 예외 처리 필요
    const seperated = names.split(',');
    return seperated;
  }
}

export default App;
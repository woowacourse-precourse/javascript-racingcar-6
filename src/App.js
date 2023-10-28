import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    async function getInput() {
      const CAR_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      const COUNT_INPUT =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      //chkInput을 통과할 경우 객체에 담는다.
      if(chkInput(CAR_INPUT, COUNT_INPUT)) {
        const CARS = CAR_INPUT.split(',');
        makeCarList(CARS, COUNT_INPUT);
      }
    }

    getInput();
  }
}

export default App;

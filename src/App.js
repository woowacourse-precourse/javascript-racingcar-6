import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {}

  async inputEntry() {
    const inputName = await Console.readLineAsync(this.message('INPUT_NAME'));
    const tmpEntry = inputName.split(',');
    this.entry = tmpEntry;
  }

  message(option) {
    const MESSAGE = {
      INPUT_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      ASK_LAB: '시도할 횟수는 몇 회인가요?\n',
    };
    return MESSAGE[option];
  }
}

export default App;

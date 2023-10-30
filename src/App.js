import {Console, Random} from "@woowacourse/mission-utils";

const MESSAGE = {
  INPUT_TRY_COUNT: "시도할 횟수는 몇 회인가요?",
}
class App {
  async play() {
    const tryCount = await Console.readLineAsync(MESSAGE.INPUT_TRY_COUNT);
  }
}

export default App;

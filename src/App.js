import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

const print = (message) => {
  Console.print(message);
}

const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
}

class App {
  async play() {
    print()
  }
}

export default App;

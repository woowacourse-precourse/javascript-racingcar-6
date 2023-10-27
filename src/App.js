import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carName = await Console.readLineAsync();
      const count = await Console.readLineAsync(
        `시도할 횟수는 몇 회 인가요?\n`
      );

      const carArr = carName.split(",");
    } catch (error) {
      throw new Error("[ERROR] 잘못된 형식입니다.");
    }
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carName = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
      const count = await Console.readLineAsync(`시도할 횟수는 몇 회 인가요?\n`);

      const carArr = carName.split(",");
      
    } catch (error) {
      throw new Error("[ERROR] 잘못된 형식입니다.");
    }

  }
}

export default App;

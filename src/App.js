import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 자동차 이름 입력
    const carStr = await MissionUtils.Console.readLineAsync('닉네임을 입력해주세요.');
    const carArr = carStr.split(',');

  }
}

export default App;
